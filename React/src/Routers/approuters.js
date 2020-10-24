
import React from 'react';
import Dashboard from '../components/DashBoard'
import LoginPage from '../components/Login'
import{Router,Route,Switch,Link,NavLink} from 'react-router-dom'

import EditExpense from '../components/Edit'
import NotFound from '../components/404'
import AddExpense from '../components/AddExpense'
import createHistory from 'history/createBrowserHistory'
export const history=createHistory();
import PvtRoute from '../Routers/privateRouter'

const Approuter= ()=>{
    return(
<Router history={history}>
<div>
<Switch>
   <Route path="/" component={LoginPage} exact={true}/>
   <PvtRoute path="/Dashboard" component={Dashboard} exact={true}/>
    <PvtRoute path="/Edit/:id"component={EditExpense}exact={true}/>
    <PvtRoute path="/Create" component={AddExpense} exact={true}/>
    
    <Route  component={NotFound} exact={true}/>
</Switch>
</div>


</Router>
);}
export default Approuter;
