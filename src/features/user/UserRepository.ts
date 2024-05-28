import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProgressRepository = async () => {
  return await prisma.progress.findMany();
};

export const createOneUserRepository = async ({ name, email }: { name: string; email: string }) => {
  return await prisma.user.create({
    data: {
      name,
      email,
    },
  });
};

export const getProgressByUserRepository = async (userId: number) => {
  return await prisma.progress.findMany({
    where: { userId },
  });
};
