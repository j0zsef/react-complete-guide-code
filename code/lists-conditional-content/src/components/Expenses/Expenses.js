import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const currentYear = new Date().getFullYear().toString();
    const [filteredYear, setFilteredYear] = useState(currentYear);
    const expenses = props.expenses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />));

    const yearChangeHandler = function (newFilteredYear) {
        setFilteredYear(newFilteredYear)
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filteredYear={filteredYear} onYearChange={yearChangeHandler}/>
                {expenses.filter((expense) => {
                    return expense.props.date.getFullYear().toString() === filteredYear;
                })}
            </Card>
        </div>
    );
}

export default Expenses;
