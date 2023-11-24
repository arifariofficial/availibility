import { availibility } from "../../availibility /availibilitySlice";
import { availibilityFunction } from "../availibilityFunctionSlice";
import AvailibilityFunctionBody from "./AvailibilityFunctionBodyMe";
import { useSelector } from "react-redux";

const Me = () => {
  const items = useSelector(availibility);
  const data = useSelector(availibilityFunction);

  return (
    <div className="availibility-weeksAndBody-container">
      <div className="weeks-header-button-container">
        <button className="weeks-header-button-all">All ({data.length})</button>
        {items.map((item) => (
          <button className="weeks-header-button" key={item.id}>
            Week {item.week}
          </button>
        ))}
      </div>
      <div className="availibility-function-body">
        <AvailibilityFunctionBody />
      </div>
    </div>
  );
};

export default Me;
