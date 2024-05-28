"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgressByUserRepository = exports.addProgressRepository = exports.getProgressRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getProgressRepository = async () => {
    return await prisma.progress.findMany();
};
exports.getProgressRepository = getProgressRepository;
const addProgressRepository = async ({ userId, date, value }) => {
    return await prisma.progress.create({
        data: {
            userId,
            date: new Date(date),
            value,
        },
    });
};
exports.addProgressRepository = addProgressRepository;
const getProgressByUserRepository = async (userId) => {
    return await prisma.progress.findMany({
        where: { userId },
    });
};
exports.getProgressByUserRepository = getProgressByUserRepository;
//# sourceMappingURL=ProgressRepository.js.map