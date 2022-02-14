import React, { Component } from "react";

class EducationalExperience extends Component {
    constructor() {
      super();
  
      this.state = {
        educationalInfo: {
          school: '',
          qualification: '',
          dateFrom: '',
          dateTo: '',    
        },  
        data: []
      };
    }

    handleChange = (e) => {
      /* if(e.target.id === 'schoolInput') {
        this.setState({
          educationalInfo: {
            school: e.target.value
          }
        });
      }
      else if(e.target.id === 'qualificationInput') {
        this.setState({
          educationalInfo: {
            qualification: e.target.value
          }
        });
      }
      else if(e.target.id === 'dateFrom') {
        this.setState({
          educationalInfo: {
            dateFrom: e.target.value
          }
        });
      }
      else if(e.target.id === 'dateTo') {
        this.setState({
          educationalInfo: {
            dateTo: e.target.value
          }
        });
      } */
    const id = e.target.id;
    const value = e.target.value;
    this.setState({
      educationalInfo: {
        [id]: value
      }
    });

    };

    onSubmit = (e) => {
      e.preventDefault();
      this.setState({
        data: this.state.data.concat(this.state.educationalInfo),
        educationalInfo: {
          school: '',
          qualification: '',
          dateFrom: '',
          dateTo: ''
        }          
      });
    };

  
      render() {
        const  { educationalInfo } = this.state;

        return (
          <div>
            <h2>Educational Experience</h2>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="schoolInput">School</label>
                <input onChange={this.handleChange} value={educationalInfo.school} type="text" id="school"/>
                <label htmlFor="qualificationInput">Qualification</label>
                <input onChange={this.handleChange} value={educationalInfo.qualification} type="text" id="qualification"/>
                <label htmlFor="dateFrom">From</label>
                <input onChange={this.handleChange} value={educationalInfo.dateFrom} type="date" id="dateFrom"/>
                <label htmlFor="dateTo">To</label>
                <input onChange={this.handleChange} value={educationalInfo.dateTo} type="date" id="dateTo"/>
                <button type="submit">
                  Add
                </button>        
            </form>
          </div>
        ); 
      }
    
  }
  
  export default EducationalExperience;