import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom'; 




export class EditExpensePage extends React.Component {
  
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.navigate('/')
   }
  onClick = ()=>{
    this.props.startRemoveExpense({id: this.props.expense.id})
    this.props.navigate('/')
   }
  render(){
    
    return(
      <div> 
           <ExpenseForm 
             expense={this.props.expense}
             onSubmit = {this.onSubmit}
            />
            <button onClick = {this.onClick}>Remove
            </button>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) =>({
  editExpense: (id, expense)=>dispatch(onSubmit(id,expense)),
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