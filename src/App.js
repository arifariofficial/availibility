import { useState } from "react";
import Availibility from "./Availibility";
import DataContext from "./component/DataContext";
import uuid from "react-uuid";
import AvailibilityFuntion from "./AvailibilityFuntion";

const createCalendar = () => {
  const currentDate = new Date();

  const createTime = () => {
    let time = [];
    let hour = 6;
    let min1 = "00";

    for (let j = 0; j < 34; j += 2) {
      for (let k = 0; k < 2; k++) {
        time.push({
          id: uuid(),
          time: `${hour}:${min1}`,
          selected: false,
        });
        min1 = 30;
      }
      min1 = "00";
      hour++;
    }
    return time;
  };

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - 1
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
      id: uuid(),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      today: currentDate.getDate(),
      isItemExist: false,
      year: firstDayOfMonth.getFullYear(),
      day: firstDayOfMonth.getDay(),
      time: createTime(),
    };

    currentDays.push(calendarDay);
  }

  //calculate week number

  const startDate = new Date(currentDate.getFullYear(), 0, 1);

  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  let currentWeekNumber = Math.ceil(days / 7);

  let weeks = [];

  for (let i = 0; i < currentDays.length; i += 7) {
    const chunk = currentDays.slice(i, i + 7);

    weeks.push({
      id: uuid(),
      week: currentWeekNumber,
      weekDisable: false,
      date: chunk,
    });
    currentWeekNumber++;
  }
  return weeks;
};

const data = createCalendar();

function App() {
  const [items, setItems] = useState(data);

  return (
    <DataContext.Provider value={[items, setItems]}>
      <div className="App">
        <AvailibilityFuntion />
        <Availibility />
      </div>
    </DataContext.Provider>
  );
}

export default App;
