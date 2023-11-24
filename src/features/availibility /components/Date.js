import DateButton from "./DateButton";

const Date = ({ date, setMonthView, index, weekDisable }) => {
  return (
    <div className="date-row disabled">
      {date.map((item) => (
        <DateButton
          item={item}
          key={item.id}
          index={index}
          setMonthView={setMonthView}
          weekDisable={weekDisable}
        />
      ))}
    </div>
  );
};
export default Date;
