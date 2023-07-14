'use client';

export const useStorage = () => {
  const getItem = (key: string) => {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  };

  const setItem = (key: string, data: unknown) => {
    return typeof window !== 'undefined'
      ? localStorage.setItem(key, JSON.stringify(data))
      : null;
  };

  const removeItem = (key: string) => {
    return typeof window !== 'undefined' ? localStorage.removeItem(key) : null;
  };

  const clear = () => {
    return typeof window !== 'undefined' ? localStorage.clear() : null;
  };

  return {
    getItem,
    setItem,
    removeItem,
    clear
  };
};
