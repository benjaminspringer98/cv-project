import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience"
import './styles/main.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

    render() {
      return (
        <div>
          <h1>CV Generator</h1>
          <GeneralInformation/>
          <EducationalExperience/>
        </div>
      ); 
    }
  
}

export default App;
