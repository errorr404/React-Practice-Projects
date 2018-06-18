import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
const Header = ()=>(
  <header>
    <h1>Portfolio</h1>


  {/* <Link to="/"> dashboard</Link>


  <Link to="/create">Create Expense</Link>


 <Link to="/edit">Edit Expense</Link>

  <Link to="/help">Help</Link> */}

  <NavLink to="/" activeClassName="is-active" exact={true}> Home</NavLink>
  <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
   <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>

  </header>
);
export default Header;
