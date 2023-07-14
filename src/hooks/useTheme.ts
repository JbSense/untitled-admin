import { useStorage } from './useStorage';

export const useTheme = () => {
  const { getItem } = useStorage();

  const currentTheme = getItem('theme') ?? 'theme-light';

  return {
    currentTheme
  };
};
