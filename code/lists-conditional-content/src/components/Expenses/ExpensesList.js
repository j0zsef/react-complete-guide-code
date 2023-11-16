import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = function(props) {
    if (props.expenses.length === 0) {
        return (<h2 className="expenses-list__fallback" >No expenses found.</h2>)
    }else {
       return ( <ul className="expenses-list"> {
        props.expenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)) }
        </ul> )
    }
}

export default ExpensesList;