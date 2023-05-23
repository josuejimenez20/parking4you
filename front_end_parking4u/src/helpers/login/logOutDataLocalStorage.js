export const logOutDataLocalStorage = (callback) => {
    location.reload();

    localStorage.removeItem('USER_STORAGE_KEY');
    localStorage.removeItem('USER_NAME');

    setTimeout(() => {
        callback();
    }, 1000);

}

export const logOutAdministrativeDataLocalStorage = (callback) => {
    location.reload();

    localStorage.removeItem('USER_STORAGE_KEY');
    localStorage.removeItem('USER_NAME');
    localStorage.removeItem('USER_STORAGE_KEY_ADMINISTRATIVE');
    
    setTimeout(() => {
        callback();
    }, 1000);

}