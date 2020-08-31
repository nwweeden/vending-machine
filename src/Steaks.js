import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'


function Steaks () {
  return( 
    <div>
        <p>We made it to steaks!</p>
        <p>Go back to <Link to='/'>Vending Machine</Link></p>
    </div>
  )
}

export default Steaks