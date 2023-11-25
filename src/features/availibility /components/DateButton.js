import React, { useState } from "react";
import DropDown from "./DropDown";

const DateButton = ({ item, weekDisable, setMonthView, index }) => {
  const [display, setDisplay] = useState(false);
  let disable = false;

  if (item.number < item.today && item.month === item.currentMonth) {
    disable = true;
  } else if (item.number > item.today && item.month === item.currentMonth - 1) {
    disable = true;
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="date-cell-container">
      <button
        className={weekDisable ? "date-cell disabled" : "date-cell"}
        disabled={weekDisable || disable}
        onClick={() => setDisplay(!display)}
        style={{ backgroundColor: `${display ? "#d1d6de" : ""}` }}
        onMouseEnter={() =>
          setMonthView({ month: months[item.month], date: item.number })
        }
      >
        <span
          className={item.isItemExist ? "dot" : ""}
          style={{ visibility: weekDisable ? "hidden" : "visible" }}
        ></span>
        <div
          className={
            item.today === item.number && index === 0
              ? "today"
              : "date-cell-div"
          }
        >
          {item.number}
        </div>
      </button>
      <div className={display ? "dropDown-show" : "dropDown-hidden"}>
        <DropDown date={item} display={display} setDisplay={setDisplay} />
      </div>
    </div>
  );
};

export default DateButton;
