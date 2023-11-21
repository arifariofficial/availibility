import { useContext } from "react";
import DataContext from "../component/DataContext";
import AvailibilityFuntionBody from "./AvailibilityFuntionBody";

const Matching = () => {
  const [items, setItems] = useContext(DataContext);
  return (
    <div className="availibility-weeksAndBody-container">
      <div className="weeks-header-button-container">
        <button className="weeks-header-button-all">All</button>
        {items.map((item) => (
          <button className="weeks-header-button" key={item.id}>
            Week {item.week}
          </button>
        ))}
      </div>
      <div className="availibility-function-body">
        <AvailibilityFuntionBody />
      </div>
    </div>
  );
};

export default Matching;
