import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     name :  [{
         firstName :'Abhishek',
         lastName :'',
         key : 1
     },
     {
        firstName :'Sweta',
        lastName :'Mishra',
         key : 2
    },
    {
       firstName :'Ved',
       lastName :'Prakash',
        key : 3
   }
  ],

}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
        </header>               
       <MainComponent/>
      </div>
    );
  }
}

export default App;
