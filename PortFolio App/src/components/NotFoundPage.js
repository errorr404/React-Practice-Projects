import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
// component for displaying the 404 error
const NotFoundPage = () => (
  <div>
    {/* 404! - <a href="/">Go home</a>  this occure a full page refreshing  */}
    404! -<Link to="/">Go Home</Link>
    {/* through this Link page server enables the client site routing. */}
  </div>
);

export default NotFoundPage;
