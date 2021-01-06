import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../Context/AuthContext';

const ReactRoutes = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { token } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!token ? (
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

export default ReactRoutes;
