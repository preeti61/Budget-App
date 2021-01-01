import React from 'react'
import {connect} from 'react-redux'
import {changetext,sortByAmount,sortByDate,setstartDate,setendDate} from '../actions/filter'
import {DateRangePicker} from 'react-dates'
class ExpenseListFilter extends React.Component{

    state={
        calendarFocused:null};

        
        onDatesChange=({startDate,endDate})=>{
       this.props.dispatch((setstartDate(startDate)))
       this.props.dispatch((setendDate(endDate)))
    }

    onFocusChange=(calendarFocused)=>{
this.setState(()=>({calendarFocused}))
    }
    render(){
    return(
   <div className="general">
       <input  type="text" value={this.props.filters.text} placeholder="Search Your  Expense" onChange={(e)=>{
          this.props.dispatch(changetext({text:e.target.value}))
        }
      }  />
      <select 
       value={this.props.filters.sortBy}
       onChange={(e)=>{
           if(e.target.value==='date')
           this.props.dispatch(sortByDate())
           else if(e.target.value==='amount')
           this.props.dispatch(sortByAmount())
      
      }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
      </select>
      <h2 className="DarkYellow">Choose date</h2>
      <DateRangePicker
          startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange} 
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={()=>false}
      />
   </div>   
    )}
}
const Mapstate=(state)=>{
    return{
        filters:state.filters
    }
}

export default connect(Mapstate)(ExpenseListFilter)

