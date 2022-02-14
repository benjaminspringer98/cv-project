import React, { Component } from "react";

class GeneralInformation extends Component {
    constructor() {
      super();
  
      this.state = {
        name: '',
        email: '',
        phone: '',      
        mode: {
          name: 'edit',
          buttonText: 'Save'
        }
      };

      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = (e) => {
      const id = e.target.id;
      const value = e.target.value;
      this.setState({
        [id]: value
      });
    };

    onSubmit = (e) => {
      e.preventDefault();

      if(this.state.mode.name === 'edit') {
        this.setState({          
          mode: {
            name: 'display',
            buttonText: 'Edit'
          }
        });
      }
      else {
        this.setState({
          mode: {         
            name: 'edit',
            buttonText: 'Save'
          }
        })
      }
    };

      render() {
        const { name, phone, mail, mode} = this.state;

        let readOnly;
        if(mode.name === 'display') {
          readOnly = true;
        }

        return (
          <div>
            <form onSubmit={this.onSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} value={name} type="text" id="name" readOnly={readOnly}/>
                <label htmlFor="email">E-Mail</label>
                <input onChange={this.handleChange} value={mail} type="text" id="email" readOnly={readOnly}/>
                <label htmlFor="phone">Phone</label>
                <input onChange={this.handleChange} value={phone} type="text" id="phone" readOnly={readOnly}/>
                <button type="submit">
                  {mode.buttonText}
                </button>        
            </form>
          </div>
        );
      }
    
  }
  
  export default GeneralInformation;