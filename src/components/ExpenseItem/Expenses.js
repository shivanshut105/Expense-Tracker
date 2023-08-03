import { useState } from 'react';
import Card from '../UI/Card/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFliter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(item => {
    return item.date.toLocaleString('en-US', { year: 'numeric' }) === filteredYear;
  })

  return (
    <li>
      <Card className='Expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
