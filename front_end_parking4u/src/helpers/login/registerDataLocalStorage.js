export const registerDataLocalStorage = (dataUser) => {
    localStorage.setItem('USER_STORAGE_KEY', JSON.stringify(dataUser));
}