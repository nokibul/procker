import { CreateUserDto } from "./UserDtos";

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateBody = (body: any): CreateUserDto => {
  const errors: string[] = [];
  
  if (typeof body.name !== 'string') {
    errors.push('Name is required.');
  }

  if (body.name.trim() === '') {
    errors.push('Name must be a non-empty string.');
  }
  
  if (typeof body.email !== 'string') {
    errors.push('Email is required.');
  }

  if (!isValidEmail(body.email)) {
    errors.push('Email is invalid');
  }
  
  if (errors.length > 0) {
    throw new Error(errors.join(' '));
  }
  
  return body as CreateUserDto;
};

