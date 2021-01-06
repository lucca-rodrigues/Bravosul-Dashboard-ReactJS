import React from 'react';
import { Switch } from 'react-router-dom';
import ReactRoutes from './Route';

import Login from '../Pages/Login';
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';
import NewProducts from '../Pages/NewProducts';

export default function Routes() {
  return (
      <Switch>
        <ReactRoutes path="/" exact component={Login} />
        <ReactRoutes path="/signin" component={SignIn} />
        <ReactRoutes path="/dashboard" component={Dashboard} isPrivate />
        <ReactRoutes path="/products/new" component={NewProducts} isPrivate />
      </Switch>
  );
}
