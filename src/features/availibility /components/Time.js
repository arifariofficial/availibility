import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../availibilitySlice";
import {
  deleteTime,
  setTime,
} from "../../availibilityFunction/availibilityFunctionSlice";

const Time = ({ time, date }) => {
  const items = useSelector((state) => state.availibility);
  const dispatch = useDispatch();

  const handleTimeSelected = (id) => {
    let selectedTime = [];

    let dateObj = {};

    let newItems = items.map((item1) => {
      let date1 = item1.date.map((item2) => {
        let arrTime = [];

        let time = item2.time.map((item3) => {
          //finding the exact time button with id and changing selected property

          if (item3.id === id) {
            if (!item3.selected) arrTime.push(item3.time); //cause selected property not changed yet
            return {
              ...item3,
              selected: !item3.selected,
            };
          }
          if (item3.selected) arrTime.push(item3.time);

          return item3;
        });

        let clickedIndex = time.findIndex((item) => item.id === id);

        let findFirstSelectedIndex = time.findIndex(
          (item) => item.selected === true
        );

        time = time.map((itemT, index) => {
          if (findFirstSelectedIndex >= 0) {
            if (index > findFirstSelectedIndex && index < clickedIndex) {
              return {
                ...itemT,
                selected: true,
              };
            } else if (index > findFirstSelectedIndex && index > clickedIndex) {
              if (itemT.selected) arrTime.pop(itemT.time);
              return {
                ...itemT,
                selected: false,
              };
            }
          }

          return itemT;
        });

        //changing the isItemExist with the exact date button

        if (arrTime.length > 0 && item2.id === date.id) {
          dateObj = {
            id: date.id,
            item1Id: item1.id, //to find the week
            year: date.year,
            month: date.month,
            week: item1.week,
            weekDisable: item1.weekDisable,
            date: date.number,
            time: arrTime,
          };
          dispatch(setTime(dateObj));

          return {
            ...item2,
            time: time,
            isItemExist: true,
          };
        }
        if (arrTime.length === 0 && item2.id === date.id) {
          dateObj = {
            id: date.id,
          };
          dispatch(deleteTime(dateObj));
          return {
            ...item2,
            time: time,
            isItemExist: false,
          };
        }

        return { ...item2, time: time };
      });

      return { ...item1, date: date1, selectedTime: selectedTime };
    });

    dispatch(setItems(newItems));
  };
  return (
    <>
      <button
        className={time.selected ? "time-cell selected" : "time-cell"}
        onClick={() => handleTimeSelected(time.id)}
      >
        {time.time}
      </button>
    </>
  );
};

export default Time;
