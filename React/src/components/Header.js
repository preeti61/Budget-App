 import{Link} from 'react-router-dom'
  import React from 'react'
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'
const Header=(props)=>{
    return(

        <div className="header row">
            
            <div><h1>BudgetApp</h1></div>
            
            <div className="navlink ">
            <Link to="/Dashboard" className="white" activeClassName="is-active" exact={true}>Dashboard </Link>
            </div>
          
            <div><button onClick={props.startLogout}>LogOut</button></div>
            
            
           
        </div>
    )
}

const mapState=(dispatch)=>({
startLogout:()=>dispatch(startLogout())
})
export default connect(undefined,mapState)(Header);
