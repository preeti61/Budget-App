
import React from 'react';
import {connect} from 'react-redux'
import {startEditExpense} from '../actions/expense'
import ExpenseForm from  '../components/ExpenseForm'
import {startRemoveExpense} from '../actions/expense'
const EditExpense=(props)=>{
  
    return(
        <div>
            
              <ExpenseForm expense={props.expense} onSubmit={(expense)=>{
                  props.dispatch(startEditExpense(props.expense.id,expense))
                  props.history.push('/')
              }}/>
              <button onClick={()=>{
         props.dispatch(startRemoveExpense(props.expense.id));
         props.history.push('/dashboard')
    }}>Remove</button>
        </div>
    )
}

const mapState=(state,props)=>{
    return{
        expense:state.expenses.find((expense)=>{
            return expense.id===props.match.params.id

        })
    }
}

export default connect(mapState)(EditExpense);