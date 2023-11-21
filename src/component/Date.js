import DateButton from "./DateButton";

const Date = ({ item, disableWeek, setMonthView, index }) => {
  return (
    <div className="date-row disabled">
      {item.map((item) => (
        <DateButton
          item={item}
          key={item.id}
          index={index}
          disableWeek={disableWeek}
          setMonthView={setMonthView}
        />
      ))}
    </div>
  );
};
export default Date;
