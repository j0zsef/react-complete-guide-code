import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const currentYear = new Date().getFullYear().toString();
    const [filteredYear, setFilteredYear] = useState(currentYear);
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    const yearChangeHandler = function (newFilteredYear) {
        setFilteredYear(newFilteredYear)
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filteredYear={filteredYear} onYearChange={yearChangeHandler}/>
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
