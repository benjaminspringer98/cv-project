import React, { Component } from "react";

class GeneralInformation extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        name: '',
        email: '',
        phone: '',             
      };
    }

    handleChange = (e) => {
      const id = e.target.id;
      const value = e.target.value;
      this.setState({
        [id]: value
      });
    };
   
      render() {
        const { name, phone, email } = this.state;
        let readOnly;

        if(this.props.mode === 'edit') {          
          return (
            <div>
              <form>
                  <label htmlFor="name">Name</label>
                  <input onChange={this.handleChange} value={name} type="text" id="name" readOnly={readOnly}/>
                  <label htmlFor="email">E-Mail</label>
                  <input onChange={this.handleChange} value={email} type="text" id="email" readOnly={readOnly}/>
                  <label htmlFor="phone">Phone</label>
                  <input onChange={this.handleChange} value={phone} type="text" id="phone" readOnly={readOnly}/>
                    
              </form>
            </div>
          );
        } else {
          return (
            <div>
              <p>Name: {name}</p>
              <p>E-Mail: {email}</p>
              <p>Phone: {phone}</p>

            </div>
          );
        }
      }
    
  }
  
  export default GeneralInformation;