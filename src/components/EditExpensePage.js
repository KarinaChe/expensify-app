import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom'; 


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.navigate('/')
   }
  onClick = ()=>{
    this.props.startRemoveExpense({id: this.props.expense.id})
    this.props.navigate('/')
   }
  render(){
    
    return(
      <div> 
        <div className='page-header'>
           <div className='content-container'>
              <h1 className='page-header__title'>Edit Expense</h1>
           </div>
        </div>
        <div className='content-container'>
          <ExpenseForm 
            expense={this.props.expense}
            onSubmit = {this.onSubmit}
          />
          <button className='button button--secondary' onClick = {this.onClick}>Remove Expense</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) =>({
  startEditExpense: (id, expense)=>dispatch(startEditExpense(id,expense)),
  startRemoveExpense: (data)=>dispatch(startRemoveExpense(data))
})

function WithNavigate(props) {
  const navigate = useNavigate();
  return <EditExpensePage {...props} navigate={navigate} />
}

const mapStateToProps = (state) => {
  const params = useParams()
     return {
        expense: state.expenses.find((expense) => expense.id === params.id)
     }
}


export default connect(mapStateToProps,mapDispatchToProps)(WithNavigate);