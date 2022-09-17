export const setString = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getString = (key: string): string => {
  return localStorage.getItem(key);
};
