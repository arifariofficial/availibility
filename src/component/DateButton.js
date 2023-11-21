import React, { useState } from "react";
import DropDown from "./DropDown";

const DateButton = ({ item, disableWeek, setMonthView, index }) => {
  const [display, setDisplay] = useState(false);
  const [isItemExist, setIsItemExist] = useState(item.isItemExist);

  const handleDateClick = () => {
    setDisplay(!display);
  };

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
        className={disableWeek ? "date-cell disabled" : "date-cell"}
        disabled={disableWeek}
        onClick={() => handleDateClick()}
        style={{ backgroundColor: `${display ? "#d1d6de" : ""}` }}
        onMouseEnter={() =>
          setMonthView({ month: months[item.month], date: item.number })
        }
      >
        <span
          className={isItemExist ? "dot" : ""}
          style={{ visibility: disableWeek ? "hidden" : "visible" }}
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
        <DropDown
          item={item}
          display={display}
          setDisplay={setDisplay}
          isItemExist={isItemExist}
          setIsItemExist={setIsItemExist}
        />
      </div>
    </div>
  );
};

export default DateButton;
