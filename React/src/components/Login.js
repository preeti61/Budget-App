
import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'
 const LoginPage=({startLogin})=>(
        <div className="box-layout">
          <div className="box-layout-box">
            <h1 className="box-layout-title">BUDGET APP</h1>
          <button className="button" onClick={startLogin}>Login with Google</button>
          </div>
           
        </div>
    )

    const mapState=(dispatch)=>({
      startLogin:()=>dispatch(startLogin())
    })

export default connect(undefined,mapState)(LoginPage)
