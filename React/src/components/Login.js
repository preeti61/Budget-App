
import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'
 const LoginPage=({startLogin})=>(
        <div className="box-layout">
          
            <button onClick={startLogin}>Login</button>
        </div>
    )

    const mapState=(dispatch)=>({
      startLogin:()=>dispatch(startLogin())
    })

export default connect(undefined,mapState)(LoginPage)
