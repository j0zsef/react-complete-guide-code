import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";
function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);
    const onSaveExpenseData = function(savedExpenseData){
        const expenseData = {
            ...savedExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpense(expenseData);
    }
    const onCancelHandler = function(){
        setShowForm(false);
    }
    const onNewExpenseHandler = function (){
        setShowForm(true);
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={onNewExpenseHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onCancel={onCancelHandler} onSaveExpenseData={onSaveExpenseData}/>}
        </div>
    )

}

export default NewExpense;