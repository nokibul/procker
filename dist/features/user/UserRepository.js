"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProgressByUserRepository = exports.createOneUserRepository = exports.getProgressRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getProgressRepository = async () => {
    return await prisma.progress.findMany();
};
exports.getProgressRepository = getProgressRepository;
const createOneUserRepository = async ({ name, email }) => {
    return await prisma.user.create({
        data: {
            name,
            email,
        },
    });
};
exports.createOneUserRepository = createOneUserRepository;
const getProgressByUserRepository = async (userId) => {
    return await prisma.progress.findMany({
        where: { userId },
    });
};
exports.getProgressByUserRepository = getProgressByUserRepository;
//# sourceMappingURL=UserRepository.js.map