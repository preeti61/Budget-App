import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import moment from 'moment';
const ExpenseListItem=({id,description,dispatch,amount,createdAt})=>{
    
    return(
        <div className="item">
    <NavLink to={`/edit/${id}`}><h2>Description:{description}</h2></NavLink>
    <p>{amount}-{moment(createdAt).format('MMMM Do YYYY,hh:ss')}</p>
    
    </div>
    )

}



export default ExpenseListItem
// const mapState=(store)=>{
//    return{
      
//    }
// }