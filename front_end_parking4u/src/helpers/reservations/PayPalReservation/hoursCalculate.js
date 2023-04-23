export const hoursCalculate = (hour_start, hour_end) => {

    if (hour_start && hour_end) {
        hour_start = hour_start.split(':')[0];
        hour_end = hour_end.split(':')[0];

        hour_start = Number(hour_start);
        hour_end = Number(hour_end);

        return hour_end - hour_start;
    }
}