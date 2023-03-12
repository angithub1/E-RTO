import React from 'react'
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
    <div style={{display: this.state.flag?'none':'block', backgroundColor:"darkslateblue"}}>
    <ul className="nav nav-tabs">
    <li className="nav-item"><Link className="nav-link text-light" to="/home"> Home</Link> </li>
    <li className="nav-item"><Link className="nav-link text-light" to="/login"> Login</Link> </li>
    <li className="nav-item"><Link className="nav-link text-light" to="/register"> Register</Link> </li>
    </ul>
</div>  
    </div>
  )
}
