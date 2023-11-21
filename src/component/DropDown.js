import { useContext } from "react";
import Time from "./Time";
import DataContext from "./DataContext";

const DropDown = ({
  item,
  setDisplay,
  display,
  setIsItemExist,
  isItemExist,
}) => {
  const [items, setItems] = useContext(DataContext);

  const weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
      const arr = item.time.filter((item) => item.selected === true);

      if (arr.length > 0) {
        const newItems = items.filter((item1) =>
          item1.date.filter((item2) =>
            item2.id === id ? (item2.isItemExist = true) : item2.isItemExist
          )
        );

        setItems(newItems);
        setIsItemExist(true);
      } else if (arr.length === 0) {
        const newItems = items.filter((item1) =>
          item1.date.filter((item2) =>
            item2.id === id ? (item2.isItemExist = false) : item2.isItemExist
          )
        );

        setItems(newItems);
        setIsItemExist(false);
      }

      setDisplay(!display);
    }, 200);
  };

  const handleClear = (id) => {
    const newItems = items.filter((item1) =>
      item1.date.filter((item2) =>
        item2.id === id
          ? item2.time.filter((item3) => (item3.selected = false))
          : item2
      )
    );

    setItems(newItems);
  };

  return (
    <div
      className="dropDown-container"
      onMouseLeave={() => handleMouseLeave(item.id)}
    >
      <div className="dropdown">
        <div className="dropDown-header">
          {weekday[item.day]} {months[item.month]} {item.number}, {item.year}
          <button className="button-clear" onClick={() => handleClear(item.id)}>
            Clear
          </button>
        </div>
        <div className="time-container">
          {item.time.map((item) => (
            <Time
              item={item}
              key={item.id}
              isItemExist={isItemExist}
              setIsItemExist={setIsItemExist}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
