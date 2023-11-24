import Time from "./Time";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../availibilitySlice";
import { deleteTime } from "../../availibilityFunction/availibilityFunctionSlice";

const DropDown = ({ date, setDisplay, display }) => {
  const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const items = useSelector((state) => state.availibility);
  const dispatch = useDispatch();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleMouseLeave = (id) => {
    setTimeout(() => {
      setDisplay(!display);
    }, 200);
  };

  const handleClear = (id) => {
    let dateObj = {};
    const newItems = items.map((item1) => {
      const date = item1.date.map((item2) => {
        if (item2.id === id) {
          const time = item2.time.map((item3) => {
            return { ...item3, selected: false };
          });
          return { ...item2, isItemExist: false, time };
        }
        return { ...item2 };
      });
      return { ...item1, date: date };
    });

    dateObj = {
      id: id,
    };
    dispatch(deleteTime(dateObj));
    dispatch(setItems(newItems));
  };

  return (
    <div
      className="dropDown-container"
      onMouseLeave={() => handleMouseLeave(date.id)}
    >
      <div className="dropdown">
        <div className="dropDown-header">
          {weekday[date.day]} {months[date.month]} {date.number}, {date.year}
          <button className="button-clear" onClick={() => handleClear(date.id)}>
            Clear
          </button>
        </div>
        <div className="time-container">
          {date.time.map((item) => (
            <Time time={item} date={date} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
