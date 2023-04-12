import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { getHoursCalendarData } from "../../../../helpers/reservations/getHoursCalendarData";
import { execludeTimesForEndTime } from "../../../../helpers/reservations/convertSetExcludeTimes";
import "react-datepicker/dist/react-datepicker.css";

export function Calendar_reservation(
    {
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        excludeTimes = [] }) {

    const [enableSecondCalendar, setEnableSecondCalendar] = useState(false);

    // Is a excludeTimes copy for end date calendar
    const [excludeTimesEndDate, setExcludeTimesEndDate] = useState(excludeTimes);

    useEffect(() => {
        if (startDate) {

            setEnableSecondCalendar(true)

            const hourStartDate = getHoursCalendarData(startDate);

            let aditionalExcludeTimesEndDate = execludeTimesForEndTime(hourStartDate);

            // JOIN THE TWO ARRAYS IN "newArrayexcludeTimesEndDate"

            const newArrayexcludeTimesEndDate = excludeTimes.concat(aditionalExcludeTimesEndDate);

            setExcludeTimesEndDate(newArrayexcludeTimesEndDate);
        }

    }, [startDate])

    const today = new Date();
    const maxDate = new Date(today.setDate(today.getDate() + 2));

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const datePickerOptions = {
        selected: startDate,
        onChange: handleStartDateChange,
        showTimeSelect: true,
        timeFormat: "HH:mm",
        timeIntervals: 60,
        timeCaption: "Hora",
        dateFormat: "dd/MM/yyyy h:mm aa",
        minDate: new Date(),
        maxDate: maxDate,
        excludeTimes
    };

    const timePickerOptions = {
        selected: endDate,
        onChange: handleEndDateChange,
        showTimeSelect: true,
        timeFormat: "HH:mm",
        timeIntervals: 60,
        timeCaption: "Hora",
        dateFormat: "dd/MM/yyyy h:mm aa",
        minDate: startDate,
        maxDate: startDate,
        excludeTimes: excludeTimesEndDate
    };

    return (
        <div>
            <h3>Fecha y hora de inicio:</h3>
            <DatePicker
                {...datePickerOptions}
                withPortal
            />
            <h3>Fecha y hora final:</h3>
            {
                enableSecondCalendar ?
                    <DatePicker
                        {...timePickerOptions}
                        withPortal
                    /> : <></>
            }
        </div>
    );
}
