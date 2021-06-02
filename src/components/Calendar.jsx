import React, { useState } from 'react'
import { addDays, addMonths, subMonths, format, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameMonth, isSameDay, parse } from 'date-fns'

const Calendar = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const onDateClick = (day) => {
        setSelectedDate(day);
    }

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1))
    }

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1))
    }

    const Header = () => {
        const dateFormat = "MMMM yyyy"

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={prevMonth}>
                        chevron_left
                    </div>
                </div>

                <div className="col col-center">
                    <span>
                        {format(currentMonth, dateFormat)}
                    </span>
                </div>

                <div className="col col-end">
                    <div className="icon" onClick={nextMonth}>
                        chevron_right
                    </div>
                </div>
            </div>
        );
    }

    const daysOfWeek = () => {
        const dateFormat = "eee";
        const days = [];

        let startDate = startOfWeek(currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }

    const Cells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);

        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);

                const cloneDay = day;

                days.push(
                    <div
                        className={`col cell ${!isSameMonth(day, monthStart)
                            ? "disabled"
                            : isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                        onClick={() => onDateClick(parse(cloneDay))}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );

                day = addDays(day, 1);
            }

            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );

            days = [];
        }

        return <div className="body">{rows}</div>;
    }

    return (
        <div className="calendar">
            {Header()}
            {daysOfWeek()}
            {Cells()}
        </div>
    )
}

export default Calendar
