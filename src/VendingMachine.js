import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
// import Pies from './Pies';
// import Steaks from './Steaks';
// import Chips from './Chips';
//TODO: why do the links show up in each page?

function VendingMachine() {
  return (
    <div>
        <p>Order some <Link to='pies'>pies!</Link></p>
        <p>Order some <Link to='steaks'>steaks!</Link></p>
        <p>Order some <Link to='chips'>chips!</Link></p>

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