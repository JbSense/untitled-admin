import jwt from 'jsonwebtoken';

export const encrypt = (data: unknown) => {
  const token = jwt.sign({ data }, process.env.PRIVATE_KEY || '', {
    expiresIn: 60 * 60 * 24 // 24 horas
  });

  return token;
};
