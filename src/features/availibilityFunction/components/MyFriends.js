import { availibility } from "../../availibility /availibilitySlice";
import { useSelector } from "react-redux";

const MyFriends = () => {
  const items = useSelector(availibility);
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
      <div className="availibility-function-body"></div>
    </div>
  );
};

export default MyFriends;
