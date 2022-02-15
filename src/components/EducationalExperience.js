import React, { Component } from "react";
import uniqid from "uniqid";

class EducationalExperience extends Component {
    constructor() {
      super();
  
      this.state = {       
          school: '',
          qualification: '',
          dateFrom: '',
          dateTo: '',  
          id: uniqid(),   
          data: []
      };
    }

    handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value,
        id: this.state.id
      });
    };

    onSubmit = (e) => {
      e.preventDefault();
      const educationalInfo = {school: this.state.school, qualification: this.state.qualification, dateFrom: this.state.dateFrom, dateTo: this.state.dateTo, id: this.state.id}
      this.setState({
          data: this.state.data.concat(educationalInfo),
          school: '',
          qualification: '',
          dateFrom: '',
          dateTo: '',
          id: uniqid()       
      });
    };

    deleteEducation = (id) => {
      this.setState({
        data: this.state.data.filter(education => education.id !== id)
      });
    };
  
      render() {
        const  { data, school, qualification, dateFrom, dateTo } = this.state;

        return (
          <div>
            <h2>Educational Experience</h2>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="schoolInput">School</label>
                <input onChange={this.handleChange} value={school} type="text" id="school" name="school"/>
                <label htmlFor="qualificationInput">Qualification</label>
                <input onChange={this.handleChange} value={qualification} type="text" id="qualification" name="qualification"/>
                <label htmlFor="dateFrom">From</label>
                <input onChange={this.handleChange} value={dateFrom} type="date" id="dateFrom" name="dateFrom"/>
                <label htmlFor="dateTo">To</label>
                <input onChange={this.handleChange} value={dateTo} type="date" id="dateTo" name="dateTo"/>
                <button type="submit">
                  Add
                </button>        
            </form>
           <ul>
            {data.map((education) => {
              return <li key={education.id}><p>School: {education.school}</p>
                                            <p>Qualification: {education.qualification}</p>
                                            <p>From: {education.dateFrom}</p>
                                            <p>To: {education.dateTo}</p>
                                            <button type="button" onClick={() => this.deleteEducation(education.id)}>Delete</button>
                     </li>;      
            })}
          </ul>
          </div>
        ); 
      }
    
  }
  
  export default EducationalExperience;