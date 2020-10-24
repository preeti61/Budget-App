import  database  from '../firebase/firebase';
import firebase from '../firebase/firebase'
import {v4 as uuid} from 'uuid'
 export const AddExpense=(expense)=>{
    return(
        {
            type:'ADD_EXPENSE',
            expense:expense
        }
    )
    }

    export const startAddExpense=(expenseData)=>{
        return (dispatch,getState)=>{

            const uid=getState().auth.uid
            const {
       description='',
       note='',
       amount=0,
       createdAt=0
            }=expenseData;
        const expense={description,note,amount,createdAt};
        database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
            dispatch(AddExpense({
                id:ref.key,
                ...expense
            }))
        })
        };
    };


export   const editExpense=(id,updates={})=>{
        
       return(
           {   type:'EDIT_EXPENSE',
               id,
               updates
           }
       )
    }


export const startEditExpense=(id,expense)=>{
    return(dispatch,getState)=>{
        const uid=getState().auth.uid
        database.ref(`users/${uid}/expenses/${id}`).set(expense).then(()=>{
        dispatch(editExpense(id,expense))
        })
            
            
        
    }
}
export  const RemoveExpense=(id={})=>{
    
        return(
            {
                type:'REMOVE_EXPENSE',
                id
    
            }
        )
    }
export const startRemoveExpense=(id)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid
        database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(RemoveExpense(id))
        })
    }
}
    export const SetExpense=(expense)=>{
        
        return(
            {
         type:'SET_EXPENSE',
         expense
             }
        )

    }


    export const setExpensesData = () => {
        return (dispatch,getState) => {
            const uid=getState().auth.uid
          return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
           
            snapshot.forEach((childSnapshot) => {
              expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
              });
            });
      
            dispatch(SetExpense(expenses))
          });
        };
      };
    