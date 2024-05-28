import { IncomingMessage, ServerResponse } from 'http';
import { getProgressService, addProgressService, getProgressByUserService } from './ProgressService';
import { parse } from 'url';

export const getProgress = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const progressData = await getProgressService();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(progressData));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error.message }));
  }
};

export const addProgress = async (req: IncomingMessage, res: ServerResponse) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const { userId, date, value } = JSON.parse(body);
    try {
      const progress = await addProgressService({ userId, date, value });
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(progress));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
  });
};

export const getProgressByUser = async (req: IncomingMessage, res: ServerResponse) => {
  const url = parse(req.url ?? '', true);
//   const userId = parseInt(url.pathname.split('/').pop());
  
//   try {
//     const progress = await getProgressByUserService(userId);
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(progress));
//   } catch (error) {
//     res.writeHead(500, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ error: error.message }));
//   }
};
