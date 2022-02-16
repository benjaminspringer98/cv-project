import React, { Component } from "react";
import './styles/App.css'
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience"
import PracticalExperience from "./components/PracticalExperience";

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
          <button type="button" className="toggleButton" onClick={this.changeMode}>{this.state.buttonText}</button>
          <GeneralInformation mode={this.state.mode}/>
          <EducationalExperience mode={this.state.mode}/>
          <PracticalExperience mode={this.state.mode}/>
        </div>
      ); 
    }
  
}

export default App;
