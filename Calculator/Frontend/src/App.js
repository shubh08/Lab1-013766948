import React,{Component} from 'react';

import './App.css';

import CalculatorRoot from './CalculatorRoot';


//App Component
class App extends Component {
  render() {
    return (
      //Use Browser Router to route to different pages
      
        <div>
          {/* App Component Has a Child Component called Main*/}
          <CalculatorRoot/>
        </div>
     
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;

