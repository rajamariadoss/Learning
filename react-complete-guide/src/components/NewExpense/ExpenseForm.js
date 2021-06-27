import React, {useState} from 'react';

import './ExpenseForm.css';



const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [formDisplay, setFormDisplay] = useState(false);
    // const [userInput, setUserinput] = useState(
    //     {
    //         enteredTitle : '',
    //         enteredAmount : '',
    //         enteredDate : '',
    //     }
    // );

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserinput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // });
        // setUserinput((prevState)=> {
        //     return {
        //         ...prevState,
        //         enteredTitle : event.target.value;
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserinput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserinput({
        //     ...userInput,
        //     enteredDate : event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const addNewExpenseHandler = () => {
        setFormDisplay(true);
    };

    const cancelNewExpenseHandler = () => {
        setFormDisplay(false);
    };

    if (formDisplay === false) {
        return (
            <div>
                <button type='button' onClick={addNewExpenseHandler}>Add New Expense</button>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
                    </div>
                    <div className='new-expense__actions'>
                        <button type='button' onClick={cancelNewExpenseHandler}>Cancel</button>
                        <button type='submit'>Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;