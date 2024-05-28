"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestBody = void 0;
const getRequestBody = (req) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
        return JSON.parse(body);
    });
};
exports.getRequestBody = getRequestBody;
//# sourceMappingURL=utils.js.map