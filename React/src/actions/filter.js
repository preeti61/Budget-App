export  const changetext=({text})=>{
    return(
         {
        type:'CHANGE_TEXT',
        text
    })
 }
 
 export const sortByAmount=()=>{
     return(
         {type:'SORT_BY_AMOUNT',
         text:'amount'}
     )
 }
 
export  const sortByDate=()=>{
     return(
         {
             type:'SORT_BY_DATE',
             text:'date'
         }
     )
 }
 
 export const setstartDate=(date)=>{
     return(
         {
             type:'SET_START_DATE',
             date
         }
     )
 }
export const setendDate=(date={})=>{
     return(
         {
             type:'SET_END_DATE',
             date
         }
     )
 }