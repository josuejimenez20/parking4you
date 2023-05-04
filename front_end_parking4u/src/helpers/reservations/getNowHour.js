export const getNowHour = (data) => {

    if (data) {
        const arrayHour = data.split(',');
        const nowHour = arrayHour[1].split(':');

        if (Number(nowHour[1].trim()) >= 45) {

            return getBeforeHours(Number(nowHour[0].trim()), 7);
        }

        return getBeforeHours(Number(nowHour[0].trim()) - 1, 7);
    }
}


const getBeforeHours = (hour, stopHour) => {

    let arrayBeforeHours = [];

    for (let i = hour; i >= stopHour; i--) {

        arrayBeforeHours.push(new Date().setHours(i, 0));
    }

    return arrayBeforeHours;
}