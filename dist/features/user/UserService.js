"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOneUserService = void 0;
const UserRepository_1 = require("./UserRepository");
const createOneUserService = async ({ name, email }) => {
    return await (0, UserRepository_1.createOneUserRepository)({ name, email });
};
exports.createOneUserService = createOneUserService;
//# sourceMappingURL=UserService.js.map