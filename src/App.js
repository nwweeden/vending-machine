import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine'
import {BrowserRouter, Route} from 'react-router-dom'
import Pies from './Pies';
import Steaks from './Steaks';
import Chips from './Chips';

//TODO: Shouls app be cleaner? SHould we put this routing info elsewhere


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route exact path='/'>
          <VendingMachine />
        </Route>

        <Route exact path ='/pies'>
          <Pies />
        </Route>

        <Route exact path ='/steaks'>
          <Steaks />
        </Route>

        <Route exact path ='/chips'>
          <Chips />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
