import React from 'react';
import {connect}from 'react-redux';
import {Redirect, Route}from 'react-router-dom';
import Header from '../components/Header'
export const PublicRoute=({
    isAuthenticated,
component:Component,
...rest})=>(
    
    
    <Route{...rest} component={(props)=>(
        isAuthenticated?(
     <div>
     <Header/>
     <Component{...props}/>
      </div>
        ):(
            <Redirect to="/"/>
        )
    )}/>

)

const mapState=(state)=>({
    isAuthenticated:!!state.auth.uid
})
export default connect(mapState)(PvtRoute)