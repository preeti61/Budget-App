import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
const ExpenseListItem=({id,description,dispatch,amount,createdAt})=>{
    
    return(
        <div>
    <NavLink to={`/edit/${id}`}><h2>Description:{description}</h2></NavLink>
    <p>{amount}-{createdAt}</p>
    
    </div>
    )

}



export default ExpenseListItem
// const mapState=(store)=>{
//    return{
      
//    }
// }