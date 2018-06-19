import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';

const Header = ()=>(
  <div>
    <h1>Company Heading</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/fee" activeClassName="is-active">College Fees</NavLink>
    <NavLink to="/faculty" activeClassName="is-active">Faculty List</NavLink>
  </div>
);

const Home= ()=> (
  <p>Welcome to the official website of the college</p>
);
class Fees extends React.Component {
  constructor(props) {
    super(props);
    this.getId = this.getId.bind(this);
  }
  getId = (e)=>{
    e.preventDeafault();
    const getvalue = e.target.elements.stuid.value;
    console.log(getvalue);
  }

render(){
  const id = this.getvalue;
  return(
    <div>
      <p>This page is for fee</p>
      <Link to="/fee/1">Click here for fee</Link>
    </div>
  );
}
}

const Faculty = ()=>(
<p>Here is the list of faculties</p>
);

const Feecheck = (props)=>(
  <p>Here is the fee of {props.match.params.id}</p>
);

const AppRouter1 = ()=>(
  <BrowserRouter>
    <div>
    <Header />
     <Switch>
       <Route path="/" component={Home} exact={true}/>
       <Route path="/fee" component={Fees} exact={true}/>
       <Route path="/faculty" component={Faculty}/>
       <Route path="/fee/:id" component={Feecheck}/>
     </Switch>
    </div>

  </BrowserRouter>
);

export default AppRouter1;
