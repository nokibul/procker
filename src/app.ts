import { createServer, IncomingMessage, ServerResponse } from 'http';
import { routeHandler as progressRouteHandler } from './features/progress/ProgressRoute';
import { routeHandler as userRouteHandler } from './features/user/UserRoute';
import { parse, UrlWithParsedQuery } from 'url';

const handleCors = (res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  handleCors(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url: UrlWithParsedQuery = parse(req.url || '', true);
  
  if (url.pathname?.startsWith('/api/progress')) {
    await progressRouteHandler(req, res);
  } else if (url.pathname?.startsWith('/api/users')) {
    await userRouteHandler(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

export default server;
