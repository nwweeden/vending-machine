import React from 'react';
import {Link} from 'react-router-dom'

/**
 * App --> Route/steaks --> Steaks //Old design
 * App--> {VendingMachine --> Route/steaks --> Steaks}
 */
function Steaks () {
  return( 
    <div>
        <p>You get a steak!</p>
        <p>Go back to <Link to='/'>Vending Machine</Link></p>
    </div>
  )
}

export default Steaks