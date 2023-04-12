export const getIdUser = () => {
    const id_user = localStorage.getItem('USER_STORAGE_KEY');

    const arrayUser = id_user.split('"');

    return arrayUser[1];
}