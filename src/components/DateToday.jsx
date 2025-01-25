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



{/* 
        



--------------------------------

    const [dateData, setDateData] = useState({
                day: 0,
                date: 0,
                month: 0,
                hour: 0,
                minutes: 0

    });

    const dateObj = new Date();

   
    setInterval(() => {
       

        let minutes = dateObj.getMinutes();


        setDateData({
                day: dateObj.getDay(),
                date: dateObj.getDate(),
                month: dateObj.getMonth(),
                hour: dateObj.getHours(),
                minutes: minutes

            
        })
    }, 100)
    
    return (
        <div id="date">
            <p>{days[dateData.day]}, {dateData.date} {months[dateData.month]}</p>
            <p>{dateData.hour < 10 ? "0" + dateData.hour : dateData.hour} : {dateData.minutes < 10 ? "0" + dateData.minutes : dateData.minutes}</p>
        </div>
    )



    */}