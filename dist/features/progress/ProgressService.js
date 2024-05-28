"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgressByUserService = exports.addProgressService = exports.getProgressService = void 0;
const ProgressRepository_1 = require("./ProgressRepository");
const getProgressService = async () => {
    return await (0, ProgressRepository_1.getProgressRepository)();
};
exports.getProgressService = getProgressService;
const addProgressService = async ({ userId, date, value }) => {
    return await (0, ProgressRepository_1.addProgressRepository)({ userId, date, value });
};
exports.addProgressService = addProgressService;
const getProgressByUserService = async (userId) => {
    return await (0, ProgressRepository_1.getProgressByUserRepository)(userId);
};
exports.getProgressByUserService = getProgressByUserService;
//# sourceMappingURL=ProgressService.js.map