import getVisibleChanges from '../selectors/expense'

let expensesReducerDefault=[]


 const expenseReducer=(state=expensesReducerDefault,action)=>{
  
    switch(action.type){
        case 'ADD_EXPENSE':
            {
           return( 
               [...state,action.expense]
               )
        }
        case 'REMOVE_EXPENSE':
            {
               return state.filter((expense)=>{
                   return expense.id!=action.id
               })
            }
        
        case 'EDIT_EXPENSE' :
                {
                  return state.map((ex)=>{
                       if(ex.id===action.id)
                       return {
                           ...ex,
                          ...action.updates
                       }
                    return ex;
                    })
                }

        case 'SET_EXPENSE':
            {
                
                    return state=action.expense;
            }
        default:
            return state;
    }
    
    }
    export default expenseReducer