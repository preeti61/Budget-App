
import React from 'react';
import ExpenseList from './expenselist'
import ExpenseListFilter from './expenselistFilter'
import{Link} from 'react-router-dom'
const Dashboard=()=>{
    return(
        <div>
            <div className="general">
            <Link to="Create"  activeClassName="is-active"><button className="Purple"><h3>AddExpense</h3></button></Link>
            </div>
            

            <ExpenseListFilter/>
            <ExpenseList/>
        
        </div>
    )
}
export default Dashboard;