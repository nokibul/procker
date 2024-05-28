"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeHandler = void 0;
const UserController_1 = require("./UserController");
const url_1 = require("url");
const routes = {
    '/api/users': {
        POST: UserController_1.createOneUserCtrl,
        GET: UserController_1.getAllUsersCtrl,
    },
};
const routeHandler = async (req, res) => {
    const url = (0, url_1.parse)(req.url || '', true);
    const method = req.method;
    const route = url.pathname;
    if (routes[route] && routes[route][method]) {
        await routes[route][method](req, res);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
};
exports.routeHandler = routeHandler;
//# sourceMappingURL=UserRoute.js.map