import React, { Component } from "react";
import uniqid from "uniqid";
import '../styles/Section.css'

class PracticalExperience extends Component {
    constructor(props) {
      super(props);
  
      this.state = {       
          company: '',
          position: '',
          tasks: '',
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
      const jobInfo = {company: this.state.company, position: this.state.position, tasks: this.state.tasks, dateFrom: this.state.dateFrom, dateTo: this.state.dateTo, id: this.state.id}
      this.setState({
          data: this.state.data.concat(jobInfo),
          company: '',
          position: '',
          tasks: '',
          dateFrom: '',
          dateTo: '',
          id: uniqid()       
      });
    };

    deleteJob = (id) => {
      this.setState({
        data: this.state.data.filter(job => job.id !== id)
      });
    };
  
      render() {
        const  { data, company, position, tasks, dateFrom, dateTo } = this.state;

        if(this.props.mode === 'edit') {
          return (
            <div className="section">
              <h2>Practical Experience</h2>
              <form onSubmit={this.onSubmit}>
                  <label htmlFor="schoolInput">Company</label>
                  <input onChange={this.handleChange} value={company} type="text" id="company" name="company"/>
                  <label htmlFor="qualificationInput">Position</label>
                  <input onChange={this.handleChange} value={position} type="text" id="position" name="position"/>
                  <label htmlFor="tasks">Tasks</label>
                  <input onChange={this.handleChange} value={tasks} type="text" id="tasks" name="tasks"/>               
                  <label htmlFor="dateFrom">From</label>      
                  <input onChange={this.handleChange} value={dateFrom} type="date" id="dateFrom" name="dateFrom"/>
                  <label htmlFor="dateTo">To</label>
                  <input onChange={this.handleChange} value={dateTo} type="date" id="dateTo" name="dateTo"/>
                  <button type="submit" className="addButton">
                    Add
                  </button>        
              </form>
            <ul>
              {data.map((job) => {
                return <li key={job.id}><p>Company: {job.company}</p>
                                              <p>Position: {job.position}</p>
                                              <p>Tasks: {job.tasks}</p>
                                              <p>From: {job.dateFrom}</p>
                                              <p>To: {job.dateTo}</p>
                                              <button type="button" className="deleteButton" onClick={() => this.deleteJob(job.id)}>Delete</button>
                      </li>;      
              })}
            </ul>
            </div>
          );
      } else {
          return (
            <div className="section">
              <ul>
                  {data.map((job) => {
                    return <li key={job.id}><p>Company: {job.school}</p>
                                                  <p>Position: {job.position}</p>
                                                  <p>Tasks: {job.tasks}</p>
                                                  <p>From: {job.dateFrom}</p>
                                                  <p>To: {job.dateTo}</p>                                              
                          </li>;      
                  })}
              </ul>
            </div>
          );
      }
    }  
  }
  
  export default PracticalExperience;