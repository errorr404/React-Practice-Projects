import React from 'react';

import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () =>(
  <BrowserRouter>
    <div>
      <Header />
      {/* to display the 404 error we have to choose switch */}
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioItem}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact} />


        <Route component={NotFoundPage}/>

      </Switch>
    </div>

  </BrowserRouter>
);






export default AppRouter;
