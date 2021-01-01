import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './expenseListItem'
import getVisiblechange from '../selectors/expense'
import {NavLink} from 'react-router-dom'
const ExpenseList=(props)=>(
   
    <div>
       
     
       {props.expenses.map((exp)=>{
           return < ExpenseListItem key={exp.id} {...exp}/>
       })}
    </div>
)

const MapState=(state)=>{
    console.log(state.expenses,state.filters)
    return{
        expenses:getVisiblechange(state.expenses,state.filters)
   
    }
}
export default connect(MapState)(ExpenseList)
