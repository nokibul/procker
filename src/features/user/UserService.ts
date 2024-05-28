import { getProgressRepository, getProgressByUserRepository, createOneUserRepository } from './UserRepository';

export const createOneUserService = async ({ name, email } : { name: string; email: string }) => {
  return await createOneUserRepository({ name, email });
};

// export const addProgressService = async ({ userId, date, value }: { userId: number; date: string; value: number }) => {
//   return await addProgressRepository({ userId, date, value });
// };

// export const getProgressByUserService = async (userId: number) => {
//   return await getProgressByUserRepository(userId);
// };
