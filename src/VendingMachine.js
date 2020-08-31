import React from 'react';
import { Route, Link } from 'react-router-dom'
import Pies from './Pies';
import Steaks from './Steaks';
import Chips from './Chips';

/**App --> VendingMachine --> Routes/pies, Routes/steaks, Routes/chips */
function VendingMachine() {
  return (
    <div>
      <Route exact path="/">
        <p>Order some <Link to='pies'>pies!</Link></p>
        <p>Order some <Link to='steaks'>steaks!</Link></p>
        <p>Order some <Link to='chips'>chips!</Link></p>
      </Route>

      <Route exact path='/pies'>
        <Pies />
      </Route>

      <Route exact path='/steaks'>
        <Steaks />
      </Route>

      <Route exact path='/chips'>
        <Chips />
      </Route>


    </div>
  )
}

export default VendingMachine