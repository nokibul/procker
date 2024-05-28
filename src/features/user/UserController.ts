import { IncomingMessage, ServerResponse } from 'http';
import { createOneUserService } from './UserService';
import { parse } from 'url';
import { getRequestBody } from '../common/utils';
import { ICreateUserRequestBody } from './UserInterface';

export const getAllUsersCtrl = async (req: IncomingMessage, res: ServerResponse) => {
//   try {
//     const progressData = await getProgressService();
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(progressData));
//   } catch (error) {
//     res.writeHead(500, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ error: error.message }));
//   }
};

export const createOneUserCtrl = async (req: IncomingMessage, res: ServerResponse) => {
  req.on('end', async () => {
    const { name, email } : ICreateUserRequestBody = getRequestBody(req);

    try {
      const user = await createOneUserService({ name, email });
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(user));
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
