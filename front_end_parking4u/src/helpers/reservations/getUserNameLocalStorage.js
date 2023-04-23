export const getUserNameLocalStorage = () => {
    let user_name = localStorage.getItem('USER_NAME');
    let array_user_name = user_name.split('"');
    return array_user_name[1];
}