import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
    const onSaveExpenseData = function(savedExpenseData){
        const expenseData = {
            ...savedExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
        </div>
    )

}

export default NewExpense;