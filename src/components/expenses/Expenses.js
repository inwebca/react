import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  let expenses = props.expenses.filter(
    (x) => x.date.getFullYear().toString() === filteredYear
  );

  const onYearChangedHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearChanged={onYearChangedHandler}
        year={filteredYear}
      />
      <ExpensesChart expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </Card>
  );
}

export default Expenses;
