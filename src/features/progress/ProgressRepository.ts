import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProgressRepository = async () => {
  return await prisma.progress.findMany();
};

export const addProgressRepository = async ({ userId, date, value }: { userId: number; date: string; value: number }) => {
  return await prisma.progress.create({
    data: {
      userId,
      date: new Date(date),
      value,
    },
  });
};

export const getProgressByUserRepository = async (userId: number) => {
  return await prisma.progress.findMany({
    where: { userId },
  });
};
