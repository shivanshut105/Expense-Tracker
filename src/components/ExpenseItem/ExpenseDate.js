import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const eDate = new Date(props.date)
  const month = eDate.toLocaleString('en-US', { month: 'long' });
  const day = eDate.toLocaleString('en-US', { day: '2-digit' });
  const year = eDate.toLocaleString('en-US', {year: 'numeric'});
  
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
