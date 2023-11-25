import Date from "./Date";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../availibilitySlice";
import { updateTime } from "../../availibilityFunction/availibilityFunctionSlice";

const Weeks = ({ item, setMonthView, index }) => {
  const items = useSelector((state) => state.availibility);

  const dispatch = useDispatch();

  const handleWeekDisable = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, weekDisable: !item.weekDisable } : item
    );

    dispatch(setItems(newItems));
    dispatch(updateTime(id));
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
          date={item.date}
          setMonthView={setMonthView}
          index={index}
          weekDisable={item.weekDisable}
        />
      </div>
    </div>
  );
};

export default Weeks;
