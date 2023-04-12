export const convertCalendarData = (data) => {

    const date = new Date(data);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    // const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const dayConvert = `2023-${month}-${day}`;
    const hoursConvert = `${hours}:${minutes}`

    return {
        dayConvert,
        hoursConvert
    }
}

export const converCalendarDay = (data) => {
    const date = new Date(data);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    
    const dayConvert = `2023-${month}-${day}`;

    return dayConvert;
}