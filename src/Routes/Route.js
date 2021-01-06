import React from 'react';
import { Route as RouteReact, Redirect } from 'react-router-dom';

import { useAuth } from '../Context/AuthContext';

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <RouteReact
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
            <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
}

export default Route;
