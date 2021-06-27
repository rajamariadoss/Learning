import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpenseList from './ExpenseList';
import './Expenses.css';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('All');
    const [filteredExpenses, setFilteredExpenses] = useState(props.items);

    const expenseFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        let expensesAfterFilter = props.items;
        if (selectedYear !== 'All') {
            expensesAfterFilter = (props.items).filter(expense => 
            {
                return selectedYear === expense.date.getFullYear().toString();
            });
        }
        setFilteredExpenses(expensesAfterFilter);
    };

    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onExpenseFilterChange={expenseFilterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
        </div>
    );
}

export default Expenses;