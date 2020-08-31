import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine'
import {BrowserRouter, Route} from 'react-router-dom'
// import Pies from './Pies';
// import Steaks from './Steaks';
// import Chips from './Chips';
import NavBar from './Navbar';

//Note:
//Commented out routes can be another design for App() component 


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />
        <VendingMachine />
        {/* <Route exact path='/'>
          <VendingMachine />
          
        </Route> */}

        {/* <Route exact path ='/pies'>
          <Pies />
        </Route>

        <Route exact path ='/steaks'>
          <Steaks />
        </Route>

        <Route exact path ='/chips'>
          <Chips />
        </Route> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
