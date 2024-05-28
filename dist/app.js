"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const ProgressRoute_1 = require("./features/progress/ProgressRoute");
const UserRoute_1 = require("./features/user/UserRoute");
const url_1 = require("url");
const handleCors = (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};
const server = (0, http_1.createServer)(async (req, res) => {
    handleCors(res);
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    const url = (0, url_1.parse)(req.url || '', true);
    if (url.pathname?.startsWith('/api/progress')) {
        await (0, ProgressRoute_1.routeHandler)(req, res);
    }
    else if (url.pathname?.startsWith('/api/users')) {
        await (0, UserRoute_1.routeHandler)(req, res);
    }
    else if (url.pathname?.startsWith('/api/hello')) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ data: 'Hello world' }));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});
exports.default = server;
//# sourceMappingURL=app.js.map