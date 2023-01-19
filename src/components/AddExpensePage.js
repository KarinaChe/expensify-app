import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';


export class AddExpensePage extends React.Component {
  
  onSubmit=(expense)=>{
    this.props.onSubmit(expense),
    this.props.navigate('/')
  }
  render(){
    
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
         onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
  onSubmit: (expense)=>dispatch(addExpense(expense))
})

function WithNavigate(props) {
  const navigate = useNavigate();
  return <AddExpensePage {...props} navigate={navigate} />
}

export default connect(undefined, mapDispatchToProps)(WithNavigate);