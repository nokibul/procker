"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgressByUser = exports.addProgress = exports.getProgress = void 0;
const ProgressService_1 = require("./ProgressService");
const url_1 = require("url");
const getProgress = async (req, res) => {
    try {
        const progressData = await (0, ProgressService_1.getProgressService)();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(progressData));
    }
    catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
    }
};
exports.getProgress = getProgress;
const addProgress = async (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', async () => {
        const { userId, date, value } = JSON.parse(body);
        try {
            const progress = await (0, ProgressService_1.addProgressService)({ userId, date, value });
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(progress));
        }
        catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
    });
};
exports.addProgress = addProgress;
const getProgressByUser = async (req, res) => {
    const url = (0, url_1.parse)(req.url ?? '', true);
};
exports.getProgressByUser = getProgressByUser;
//# sourceMappingURL=ProgressController.js.map