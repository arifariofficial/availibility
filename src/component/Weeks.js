import { useContext, useState } from "react";
import Date from "./Date";
import DataContext from "./DataContext";

const Weeks = ({ item, setMonthView, index }) => {
  const [items, setItems] = useContext(DataContext);
  const [disableWeek, setDisableWeek] = useState(item.weekDisable);

  const handleWeekDisable = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, weekDisable: !item.weekDisable } : item
    );

    setItems(newItems);
    setDisableWeek(!disableWeek);
  };

  return (
    <div className="weekNumber-date-row">
      <button
        key={item.id}
        className="week-number-cell"
        onClick={() => handleWeekDisable(item.id)}
      >
        Week {item["week"]}
      </button>
      <div className="date-row">
        <Date
          item={item.date}
          disableWeek={disableWeek}
          setMonthView={setMonthView}
          index={index}
        />
      </div>
    </div>
  );
};

export default Weeks;
