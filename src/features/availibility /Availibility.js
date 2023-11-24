import "./availibility.css";
import { useState } from "react";
import Weeks from "./components/Weeks";
import { useSelector } from "react-redux";
import { availibility } from "./availibilitySlice";

const Availibility = () => {
  const items = useSelector(availibility);

  const [monthView, setMonthView] = useState({});

  const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="availibility">
      <h3 className="availibility-header">MY AVAILIBILITY FOR NEXT 7 WEEKS</h3>
      <div className="container">
        <div className="weekday-empty-cell-container">
          <li className="empty-cell">
            {monthView.month} {monthView.date}
          </li>

          <div className="weekday-cell-container">
            {weekday.map((item, index) => (
              <li className="weekday-cell" key={index}>
                {item}
              </li>
            ))}
          </div>
        </div>

        <div className="week-time-container">
          <div className="week-row-container">
            {items.map((item, index) => (
              <Weeks
                item={item}
                key={item.id}
                setMonthView={setMonthView}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availibility;
