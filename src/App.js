import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";
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
          <GeneralInformation/>
        </div>
      ); 
    }
  
}

export default App;
