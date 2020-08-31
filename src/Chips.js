import React from 'react';
import {Link} from 'react-router-dom'

/**App--> {VendingMachine --> Route/chips --> Chips} */
function Chips(){
  return( 
    <div>
        <p>You get some chips!</p>
        <p>Go back to <Link to='/'>Vending Machine</Link></p>
    </div>
  )
}

export default Chips