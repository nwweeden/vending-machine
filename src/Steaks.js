import React from 'react';
import {Link} from 'react-router-dom'


function Steaks () {
  return( 
    <div>
        <p>You get a steak!</p>
        <p>Go back to <Link to='/'>Vending Machine</Link></p>
    </div>
  )
}

export default Steaks