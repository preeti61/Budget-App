import moment from 'moment'
const getVisiblechange=(expenses,{text,sortBy,startDate,endDate})=>{
  
    return expenses.filter((exp)=>{
        const createdAtMom=moment(exp.createdAt)
        const startMatch=startDate?startDate.isSameOrBefore(createdAtMom,'day'):true
        const endMatch=endDate?endDate.isSameOrAfter(createdAtMom,'day'):true
        const textMatch=exp.description.toLowerCase().includes(text.toLowerCase());
        return textMatch&&startMatch&&endMatch
    }).sort((a,b)=>{
        if(sortBy==='date')
        {return a.createdAt<b.createdAt?1:-1}
 
        if(sortBy==='amount')
        {return a.amount<b.amount?1:-1}
    })
    
 }
 export default getVisiblechange;