
import moment from 'moment'
const filterDefault={
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}

export const filterReducer=(state=filterDefault,action)=>
{   
    
    switch(action.type)
    {    
        case  'CHANGE_TEXT':
            {
            
                  return(
                      {  ...state,
                    text:action.text})
                
            }
       case 'SORT_BY_AMOUNT' :
           {
               return(
                   {
                       ...state,
                       sortBy:action.text
                   }
               )
           }
           case 'SORT_BY_DATE' :
            {
                return(
                    {
                        ...state,
                        sortBy:action.text
                    }
                )
            }

            case 'SET_START_DATE':
            {return{
                ...state,
                startDate:action.date
            }

            }
            case 'SET_END_DATE':
            {return{
                ...state,
                endDate:action.date
            }

            }
        default:
            return state;
    }
}

export default filterReducer;