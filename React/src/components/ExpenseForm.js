import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const now=moment();
console.log(now)
export default class ExpenseForm extends  React.Component{
   
   constructor(props)
   {super(props);
    this.state={
        description:props.expense?props.expense.description:'',
        note:props.expense?props.expense.note:'',
        amount:props.expense?props.expense.amount.toString():'',  
        createdAt:props.expense?moment(props.expense.createdAt):moment(),
        calendarFocused:false,
        error:undefined
    }  
}
    
     changeDescription=(val)=>{
         
         this.setState(()=>
             ({description:val})
         )
     }
     changeText=(val)=>{
         this.setState(()=>({note:val}))
     }
     changeAmount=(val)=>{
         if(val.match(!val||/^\d{1,}(\.\d{0,2})?$/))
         {this.setState(()=>({amount:val}))}
        
        
     }

     onDateChange=(createdAt)=>{
         if(createdAt)
         this.setState(()=>({createdAt}))
     }

     onFocusChange=({focused})=>{
         this.setState(()=>({calendarFocused:focused}))
     }
    
     onSubmit=(e)=>{
         e.preventDefault();
         if(!this.state.description||!this.state.amount)
         this.setState(()=>({error:'Please enter the required fields'}))
         else
         {
             this.setState(()=>({error:undefined}))
             this.props.onSubmit({
                 description:this.state.description,
                 amount:parseFloat(this.state.amount,10),
                 note:this.state.note,
                 createdAt:this.state.createdAt.valueOf()
             })
         }
     }
    
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                       {this.state.error&&<p>{this.state.error}</p>}
                       <label htmlFor="txt">Description</label>
                        <input type="text" placeholder="Description" id="txt" value={this.state.description} onChange={(e)=>{
                            this.changeDescription(e.target.value)
                        }}autoFocus/>
                    
                       <label htmlFor="amt">Amount</label>
                        <input type="text" placeholder="Amount" value={this.state.amount} onChange={(e)=>{
                            this.changeAmount(e.target.value)
                        }} id="amt"  autoFocus/>
                   <br></br>
                   <br></br>
                  

                 
                   <SingleDatePicker
                   date={this.state.createdAt}
                   onDateChange={this.onDateChange}
                   focused={this.state.calendarFocused}
                   onFocusChange={this.onFocusChange}
                   numberOfMonths={1}
                   isOutsideRange={()=>{
                       return false
                   }}/>
                      <label htmlFor="txta">Add Note</label>
                      <textarea id="txta"value={this.state.note} onChange={(e)=>{
                          this.changeText(e.target.value)
                      }}></textarea>
                        <br></br>
                      <button>Add Expense</button>
                </form>
            </div>
        )
        
    }
} 