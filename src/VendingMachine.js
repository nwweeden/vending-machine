import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
// import Pies from './Pies';
// import Steaks from './Steaks';
// import Chips from './Chips';
//TODO: why do the links show up in each page?

function VendingMachine() {
  return (
    <div>
        <p>Go to <Link to='pies'>Pies</Link> page</p>
        <p>Go to <Link to='steaks'>steaks</Link> page</p>
        <p>Go to <Link to='chips'>chips</Link> page</p>

      {/* <BrowserRouter>

        <Route exact path ='/pies'>
          <Pies />
        </Route>

        <Route exact path ='/steaks'>
          <Steaks />
        </Route>

        <Route exact path ='/chips'>
          <Chips />
        </Route>
      
      </BrowserRouter> */}
    </div>     
  )
}

export default VendingMachine