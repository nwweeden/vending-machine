import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'


function Chips(){
  return( 
    <div>
        <p>We made it to chips!</p>
        <p>Go back to <Link to='/'>Vending Machine</Link></p>
    </div>
  )
}

export default Chips