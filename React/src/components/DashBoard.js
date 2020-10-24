
import React from 'react';
import ExpenseList from './expenselist'
import ExpenseListFilter from './expenselistFilter'
import{NavLink} from 'react-router-dom'
const Dashboard=()=>{
    return(
        <div>
            
            <ExpenseListFilter/>
            <ExpenseList/>
        
        </div>
    )
}
export default Dashboard;