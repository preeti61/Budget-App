import React from 'react';
import ReactDOM from 'react-dom';
import Approuter,{history}from './Routers/approuters';
import configStore from '../src/store/configStore'
import './styles/styles.scss'
import getvisibleChange from './selectors/expense'
import {AddExpense, setExpensesData} from './actions/expense'
import {changetext} from './actions/filter'
import {Provider} from 'react-redux'
import {firebase} from '../src/firebase/firebase'

import {login,logout} from './actions/auth'
const store=configStore()





const jsx=(
    <Provider store={store}>
    <Approuter/>
    </Provider>
)
     ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));
   let hasRendered=false; 
    

   const changeRender=()=>{
     if(!hasRendered)
     {ReactDOM.render(jsx,document.getElementById('app'));
     hasRendered=true;}
   }
   firebase.auth().onAuthStateChanged((user)=>{
       if(user)
       {  
        store.dispatch(login(user.uid));
        store.dispatch(setExpensesData()).then(()=>{
          changeRender();
          if(history.location.pathname=='/')
          history.push('/dashboard')
         })
      
       }
       else
       {
        store.dispatch(logout());
         changeRender();
        history.push('/');
       }
   })

