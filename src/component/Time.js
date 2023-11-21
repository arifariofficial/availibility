import { useContext } from "react";
import DataContext from "./DataContext";

const Time = ({ item }) => {
  const [items, setItems] = useContext(DataContext);

  const handleTimeSelected = (id) => {
    const newItems = items.filter((item1) =>
      item1.date.filter((item2) =>
        item2.time.filter((item3) =>
          item3.id === id ? (item3.selected = !item3.selected) : item3
        )
      )
    );

    setItems(newItems);
  };

  return (
    <>
      <button
        className={item.selected ? "time-cell selected" : "time-cell"}
        onClick={() => handleTimeSelected(item.id)}
      >
        {item.time}
      </button>
    </>
  );
};

export default Time;
