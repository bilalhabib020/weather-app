import { useState } from "react";


export default function DateToday () {
    const date = new Date();
    const [time, setTime] = useState({
        hour: 0,
        minutes: 0,
        amPm: ""
    });

    setInterval(() => {
        const date = new Date();
        let hour;
        let amPm;
        if(date.getHours() > 12) {
             hour = date.getHours() - 12;
             amPm = "PM";
        }
        else {
             hour = date.getHours();
             amPm = "AM";
        }
        
         setTime({
            hour: hour,
            minutes: date.getMinutes(),
            amPm: amPm
         })
    }, 100)

    return (
        <div id="date">
            <span>{days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}</span>
            <span>{time.hour < 10 ? "0" + time.hour : time.hour}:
            {time.minutes < 10 ? "0" + time.minutes : time.minutes} {time.amPm}</span>
        </div>
    )
    

}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];


