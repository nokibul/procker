import { getProgressRepository, addProgressRepository, getProgressByUserRepository } from './ProgressRepository';

export const getProgressService = async () => {
  return await getProgressRepository();
};

export const addProgressService = async ({ userId, date, value }: { userId: number; date: string; value: number }) => {
  return await addProgressRepository({ userId, date, value });
};

export const getProgressByUserService = async (userId: number) => {
  return await getProgressByUserRepository(userId);
};
