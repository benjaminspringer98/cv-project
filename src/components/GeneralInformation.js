import React, { Component } from "react";

class GeneralInformation extends Component {
    constructor() {
      super();
  
      this.state = {
        name: '',
        mail: '',
        phone: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = (e) => {
      if(e.target.id === 'nameInput') {
        this.setState({
          name: e.target.value
        });
      }
      else if(e.target.id === 'mailInput') {
        this.setState({
          mail: e.target.value
        });
      }
      else if(e.target.id === 'phoneInput') {
        this.setState({
          phone: e.target.value
        });
      }
    };

    onSubmit = (e) => {
      e.preventDefault();
      this.setState({
        name: '',
        mail: '',
        phone: ''
      });
    };
  
      render() {
        const { name, phone, mail } = this.state;

        return (
          <div>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="nameInput">Name</label>
                <input onChange={this.handleChange} value={name} type="text" id="nameInput"/>
                <label htmlFor="mailInput">E-Mail</label>
                <input onChange={this.handleChange} value={mail} type="text" id="mailInput"/>
                <label htmlFor="phoneInput">Phone</label>
                <input onChange={this.handleChange} value={phone} type="text" id="phoneInput"/>
                <button type="submit">
                    Save
                </button>        
            </form>
          </div>
        ); 
      }
    
  }
  
  export default GeneralInformation;