import React from 'react';
import { Switch } from 'react-router-dom';
import ReactRoutes from './Route';

import Login from '../Pages/Login';
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';
import NewProducts from '../Pages/NewProducts';
import DetailProducts from '../Pages/DetailProducts';
import EditProducts from '../Pages/EditProducts';

export default function Routes() {
  return (
      <Switch>
        <ReactRoutes path="/" exact component={Login} />
        <ReactRoutes path="/signin" component={SignIn} />
        <ReactRoutes path="/dashboard" component={Dashboard} isPrivate />
        <ReactRoutes path="/products/new" component={NewProducts} isPrivate />
        <ReactRoutes path="/products/:id" component={DetailProducts} isPrivate />
        <ReactRoutes path="/edit/:id" component={EditProducts} isPrivate />
      </Switch>
  );
}
