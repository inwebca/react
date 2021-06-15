import './ExpenseDate.css';

function ExpenseDate(props) {
    console.log(props);
  const month = props.date.toLocaleString("fr-CA", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("fr-CA", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;