import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newexpenses/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 205.67,
    date: new Date(2021, 5, 22),
  },
  {
    id: "e2",
    title: "Home insurance",
    amount: 605.67,
    date: new Date(2021, 7, 22),
  },
  {
    id: "e3",
    title: "Dentist",
    amount: 95.67,
    date: new Date(2019, 4, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses((prev) => {
      return [enteredExpenseData, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
