export const logOutDataLocalStorage = () => {
    const itemKey = 'USER_STORAGE_KEY';
    const item = localStorage.getItem(itemKey);

    if (item) {
        localStorage.removeItem(itemKey);
    }
}