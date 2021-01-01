import ExpenseForm from './ExpenseForm'
import React from 'react';
import {connect} from 'react-redux'
import {AddExpense, startAddExpense} from '../actions/expense'
export class AddExpensepage extends React.Component{
   onSubmit=({description,amount,createdAt,note})=>{
        this.props.startAddExpense({description,note,amount,createdAt})
        this.props.history.push('/dashboard') }
   render(){
   return(
        <div>
           <h1 >Add Expense</h1>
           <ExpenseForm 
            onSubmit={this.onSubmit}
           />
        </div>
    )
  }
}

const mapState=(dispatch)=>({

    startAddExpense:(expense)=>dispatch(startAddExpense(expense))
})

export default connect(undefined,mapState)(AddExpensepage);
