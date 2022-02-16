import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience"
import './styles/main.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: 'edit',
      buttonText: 'Preview'
    }
  }

  changeMode = () => {
    if(this.state.mode === 'edit') {
      this.setState({
        mode: 'preview',
        buttonText: 'Edit'
      });
    } else {
      this.setState({
        mode: 'edit',
        buttonText: 'Preview'
      });
    }   
  };

    render() {
      return (
        <div>
          <h1>CV Generator</h1>
          <button onClick={this.changeMode}>{this.state.buttonText}</button>
          <GeneralInformation mode={this.state.mode}/>
          <EducationalExperience mode={this.state.mode}/>
        </div>
      ); 
    }
  
}

export default App;
