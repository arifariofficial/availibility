import { useSelector } from "react-redux";
import { availibilityFunction } from "../availibilityFunctionSlice";

const AvailibilityFunctionBodyMe = () => {
  const items = useSelector(availibilityFunction);
  console.log(items);

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

  const copyOfItems = [...items]; //so that it sort() method does not mutate the state

  return (
    <>
      {copyOfItems
        .sort((a, b) => a.date - b.date && a.week - b.week)
        .map(
          (item) =>
            !item.weekDisable && (
              <div className="dateAndTime-container" key={item.id}>
                <div className="dateAndMonthView">
                  {item.date} - {months[item.month]} - {item.year}
                </div>
                <div className="time-container2">
                  <div className="time">
                    <div className="time-cell1">{item.time[0]}</div>
                    <div>-</div>
                    <div className="time-cell2">
                      {item.time[item.time.length - 1]}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
    </>
  );
};

export default AvailibilityFunctionBodyMe;
