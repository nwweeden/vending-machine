import React from 'react';
import {Link} from 'react-router-dom'

/**App--> {VendingMachine --> Route/pies --> Pies} */
function Pies () {
  return (
    <div>
      <p>You get a pie!</p>
      <p>Go back to <Link to='/'>Vending Machine</Link></p>
    </div>
  )
}

export default Pies;

