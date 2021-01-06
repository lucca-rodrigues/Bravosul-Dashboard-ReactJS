import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../Pages/Login';
import SignIn from '../Pages/SignIn';
import Dashboard from '../Pages/Dashboard';
import NewProducts from '../Pages/NewProducts';

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/dashboard" component={Dashboard} isPrivate></Route>
        <Route path="/products/new" component={NewProducts} isPrivate></Route>
      </Switch>
  );
}
