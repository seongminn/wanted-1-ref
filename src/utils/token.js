export const getToken = (key) => localStorage.getItem(key);

export const setToken = (key, token) => localStorage.setItem(key, token);

export const removeToken = (key) => localStorage.removeItem(key);
