import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023')
  const yearChangeHandler = function(newFilteredYear){
    setFilteredYear(newFilteredYear)
    console.log(newFilteredYear);
  }
  return (
      <div>
        <Card className="expenses">
          <ExpensesFilter onYearChange={yearChangeHandler}/>
          {props.expenses.map((expense) => (
              <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
              />))}
        </Card>
      </div>
  );
}

export default Expenses;
