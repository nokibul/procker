import { IncomingMessage, ServerResponse } from 'http';
import { getAllUsersCtrl, createOneUserCtrl, getProgressByUser } from './UserController';
import { parse, UrlWithParsedQuery } from 'url';
import { RouteMap } from '../common/interface';

const routes: RouteMap = {
  '/api/users': {
    POST: createOneUserCtrl,
    GET: getAllUsersCtrl,
  },
//   '/api/progress/:userId': {
//     GET: getProgressByUser
//   }
};

export const routeHandler = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  const url: UrlWithParsedQuery = parse(req.url || '', true);
  const method: string | undefined = req.method;
  const route: string | null = url.pathname;

  if (routes[route!] && routes[route!][method!]) {
    await routes[route!][method!](req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
};
