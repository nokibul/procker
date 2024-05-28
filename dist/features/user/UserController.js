"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgressByUser = exports.createOneUserCtrl = exports.getAllUsersCtrl = void 0;
const UserService_1 = require("./UserService");
const url_1 = require("url");
const utils_1 = require("../common/utils");
const getAllUsersCtrl = async (req, res) => {
};
exports.getAllUsersCtrl = getAllUsersCtrl;
const createOneUserCtrl = async (req, res) => {
    req.on('end', async () => {
        const { name, email } = (0, utils_1.getRequestBody)(req);
        try {
            const user = await (0, UserService_1.createOneUserService)({ name, email });
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        }
        catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
    });
};
exports.createOneUserCtrl = createOneUserCtrl;
const getProgressByUser = async (req, res) => {
    const url = (0, url_1.parse)(req.url ?? '', true);
};
exports.getProgressByUser = getProgressByUser;
//# sourceMappingURL=UserController.js.map