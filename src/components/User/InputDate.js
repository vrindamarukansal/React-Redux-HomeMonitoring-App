import React from "react";
import {Calendar} from 'primereact/calendar';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class InputDate extends React.Component {
  constructor(props){
        super(props);
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);
        
        this.state = {
          date : new Date(),
          minDate : minDate,
          maxDate : maxDate
          
        }
        this.dateTemplate = this.dateTemplate.bind(this);
  }  
  dateTemplate(date) {
    if (date.day > 10 && date.day < 15) {
        return (
            <div style={{backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0}}>{date.day}</div>
        );
    }
    else {
        return date.day;
    }
  }   
  render(){
   return(
        <Calendar showIcon={true} minDate={this.state.minDate} maxDate={this.state.maxDate} monthNavigator={true} 
                  yearNavigator={true} yearRange="2010:2030" value={this.state.date}
                  required onChange={(e) => this.setState({date: e.value})}/>
    )
  }
}

export default InputDate;
