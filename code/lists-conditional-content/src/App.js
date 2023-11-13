import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
  const expensesList = [
    {
      id: "1",
      title: "Car Insurance",
      date: new Date(),
      amount: "$420.69",
    },
    {
      id: "2",
      title: "Car Wash",
      date: new Date(),
      amount: "$69.420",
    },
  ];
  const [expenses, setExpenses] = useState(expensesList);
  const addExpenseHandler = function (newExpense){
    setExpenses(function(previousExpenses){
      return [
          ...previousExpenses,
          newExpense
      ];
    });
  };
  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
