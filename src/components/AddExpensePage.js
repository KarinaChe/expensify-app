import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';


export class AddExpensePage extends React.Component {
  
  onSubmit=(expense)=>{
    this.props.onSubmit(expense),
    this.props.navigate('/')
  }
  render(){
    
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
             <h1 className='page-header__title'>Add Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm 
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
  onSubmit: (expense)=>dispatch(startAddExpense(expense))
})

function WithNavigate(props) {
  const navigate = useNavigate();
  return <AddExpensePage {...props} navigate={navigate} />
}

export default connect(undefined, mapDispatchToProps)(WithNavigate);