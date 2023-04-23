export const logOutDataLocalStorage = () => {
    localStorage.removeItem('USER_STORAGE_KEY');
    localStorage.removeItem('USER_NAME');
}