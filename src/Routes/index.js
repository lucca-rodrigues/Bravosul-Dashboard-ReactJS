import React from 'react';
import { Switch } from 'react-router-dom';
import ReactRoutes from './Route';
import NavigationBar from '../Components/NavigationBar';

import Login from '../Pages/Login';
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';
import NewProducts from '../Pages/NewProducts';
import DetailProducts from '../Pages/DetailProducts';
import EditProducts from '../Pages/EditProducts';
import ListProducts from '../Pages/ListProducts';
//import NotFound from '../Pages/NotFound';

export default function Routes() {
  return (
      <Switch>
        <ReactRoutes path="/" exact component={ListProducts} />

        <ReactRoutes path="/signin" component={SignIn} />
        <ReactRoutes path="/login" component={Login} />
        {/* <ReactRoutes path="*" component={NotFound} /> */}

        <NavigationBar>
          <ReactRoutes path="/dashboard" component={Dashboard} isPrivate />
          <ReactRoutes path="/products/:id" component={DetailProducts} isPrivate/>
          <ReactRoutes path="/new" component={NewProducts} isPrivate />
          <ReactRoutes path="/edit/:id" component={EditProducts} isPrivate />
        </NavigationBar>

      </Switch>
  );
}
