import { IncomingMessage, ServerResponse } from 'http';
import { getProgress, addProgress, getProgressByUser } from './ProgressController';
import { parse, UrlWithParsedQuery } from 'url';

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => Promise<void>;

interface RouteMap {
  [path: string]: {
    [method: string]: RouteHandler;
  };
}

const routes: RouteMap = {
  '/api/progress': {
    GET: getProgress,
    POST: addProgress
  },
  '/api/progress/:userId': {
    GET: getProgressByUser
  }
};

export const routeHandler = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  const url: UrlWithParsedQuery = parse(req.url || '', true);
  const method: string | undefined = req.method;
  const route: string = url.pathname?.startsWith('/api/progress/') ? '/api/progress/:userId' : url.pathname || '';

  if (routes[route] && routes[route][method!]) {
    await routes[route][method!](req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
};
