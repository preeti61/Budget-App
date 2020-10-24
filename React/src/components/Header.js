 import{NavLink} from 'react-router-dom'
  import React from 'react'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'
const Header=(props)=>{
    return(
        <div>
             
            <NavLink to="/Dashboard" activeClassName="is-active" exact={true}>Dashboard </NavLink>
          
            <NavLink to="Create"  activeClassName="is-active">AddExpense</NavLink>
            <button onClick={props.startLogout}>LogOut</button>
        </div>
    )
}

const mapState=(dispatch)=>({
startLogout:()=>dispatch(startLogout())
})
export default connect(undefined,mapState)(Header);
