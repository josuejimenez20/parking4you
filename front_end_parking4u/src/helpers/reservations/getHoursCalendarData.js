export const getHoursCalendarData = (calendarData) => {

    if (calendarData) {

        calendarData = calendarData.toString();

        let hour = calendarData[16] + calendarData[17];

        return parseInt(hour);
    }
}