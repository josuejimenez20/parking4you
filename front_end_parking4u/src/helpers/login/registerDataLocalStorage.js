export const registerDataLocalStorage = (data, key) => {
    localStorage.setItem(key, JSON.stringify(data));
}