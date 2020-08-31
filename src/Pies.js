import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'


function Pies () {
  return (
    <div>
      <p>We made it to pie!</p>
      <p>Go back to <Link to='/'>Vending Machine</Link></p>
    </div>
  )
}

export default Pies;

