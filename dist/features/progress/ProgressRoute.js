"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeHandler = void 0;
const ProgressController_1 = require("./ProgressController");
const url_1 = require("url");
const routes = {
    '/api/progress': {
        GET: ProgressController_1.getProgress,
        POST: ProgressController_1.addProgress
    },
    '/api/progress/:userId': {
        GET: ProgressController_1.getProgressByUser
    }
};
const routeHandler = async (req, res) => {
    const url = (0, url_1.parse)(req.url || '', true);
    const method = req.method;
    const route = url.pathname?.startsWith('/api/progress/') ? '/api/progress/:userId' : url.pathname || '';
    if (routes[route] && routes[route][method]) {
        await routes[route][method](req, res);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
};
exports.routeHandler = routeHandler;
//# sourceMappingURL=ProgressRoute.js.map