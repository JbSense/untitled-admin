import { cookies } from 'next/headers';

export const theme = () => {
  const currentTheme = cookies().get('theme') ?? 'theme-light';

  return {
    currentTheme
  };
};
