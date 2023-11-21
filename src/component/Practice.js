/* import React from "react";

const Practice = () => {
  let obj = {
    1: ["student11", "student12", "student13"],
    2: ["student21", "student22", "student23"],
    3: ["student31", "student32"],
  };

  for (let key1 in obj) {
    for (let items of obj[key1]) {
      console.log(items);
    }
  }

  let arr = [
    {
      1: "data11",
      2: "data12",
      3: "data13",
    },
    {
      1: "data21",
      2: "data22",
      3: "data33",
    },
    {
      1: "data31",
      2: "data32",
      3: "data33",
    },
  ];

  for (let subObj of arr) {
    for (let subKey in subObj) {
      console.log(subObj[subKey]);
    }
  }

  console.log(arr);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div></div>
    </div>
  );
};

export default Practice;
--------------------------------------------------------
import { useState } from "react";
import Weeks from "./component/Weeks";

const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const time = [
  "6:00",
  "6:30",
  "7:00",
  "7:30",
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
];

const currentDate = new Date();

const firstDayOfMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate()
);

const weekdayOfFirstDay = firstDayOfMonth.getDay() - 1;

const currentDays = [];

for (let i = 0; i < 49; i++) {
  if (i === 0 && weekdayOfFirstDay === 0) {
    firstDayOfMonth.setDate(firstDayOfMonth.getDate());
  } else if (i === 0) {
    firstDayOfMonth.setDate(
      firstDayOfMonth.getDate() + (i - weekdayOfFirstDay)
    );
  } else {
    firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
  }

  let calendarDay = {
    id: i,
    month: firstDayOfMonth.getMonth(),
    number: firstDayOfMonth.getDate(),
    disabled: false,
    year: firstDayOfMonth.getFullYear(),
    day: firstDayOfMonth.getDay(),
    time: time,
  };

  currentDays.push(calendarDay);
}

//calculate week number

const startDate = new Date(currentDate.getFullYear(), 0, 1);

const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
let currentWeekNumber = Math.ceil(days / 7);

const daysInWeek = 7;
let weeks = [];

for (let i = 0; i < currentDays.length; i += daysInWeek) {
  const chunk = currentDays.slice(i, i + daysInWeek);

  if (!weeks[currentWeekNumber]) {
    weeks[currentWeekNumber] = [];
  }

  weeks[currentWeekNumber].push({
    week: currentWeekNumber,
    weekDisable: false,
    date: chunk,
  });
  currentWeekNumber++;
}

const Availibility = () => {
  const [monthView, setMonthView] = useState("");
  const [items, setItems] = useState(weeks);

  console.log(items);

  return (
    <div className="availibility">
      <h3 className="availibility-header">MY AVAILIBILITY FOR NEXT 7 WEEKS</h3>
      <div className="weekday-row">
        <li className="empty-cell">
          {monthView.month} {monthView.date}
        </li>
        {weekday.map((item, index) => (
          <li className="weekday-cell" key={index}>
            {item}
          </li>
        ))}
      </div>
      <div className="week-time-container">
        <div className="week-row-container">
          {items.map((item, index) => (
            <Weeks
              weeks={item[0]}
              key={index}
              setMonthView={setMonthView}
              items={items}
              setItems={setItems}
            />
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Availibility;
 */
