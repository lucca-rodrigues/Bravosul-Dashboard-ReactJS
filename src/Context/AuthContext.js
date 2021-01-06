import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../Services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
      const token = localStorage.getItem('@BravosulDashboard:token');
      const email = localStorage.getItem('@BravosulDashboard:identifier');
      const id = localStorage.getItem('@BravosulDashboard:id');

      if (token & email) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        return { token, email: JSON.parse(email), id: id };
      }

      return ({id, token, email});
    });

    const signOut = useCallback(() => {
      localStorage.removeItem('@BravosulDashboard:token');
      localStorage.removeItem('@BravosulDashboard:identifier');
      localStorage.removeItem('@BravosulDashboard:id');

      setData({});
    }, []);

    const signIn = useCallback(async ({ email, password }) => {
      const response = await api.post('/auth/local', {
        identifier: email,
        password : password,
      });

      const token = response.data && response.data.jwt;
      const id = response.data.user.id;
      const identifier = response.data && response.data.user.email;
      const username = response.data && response.data.user.username;


      console.log(response.data);

      localStorage.setItem('@BravosulDashboard:token', token);
      localStorage.setItem('@BravosulDashboard:user', JSON.stringify({id, username, email}));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ id, token, identifier});
    }, []);


    return (
      <AuthContext.Provider
        value={{ token: data.token, email: data.email, id: data.id, username: data.username, signIn, signOut //, updateUser
        }}>
        {children}
      </AuthContext.Provider>
    );
  };

  function useAuth(){
    const context = useContext(AuthContext);

    return context;
  }

  export { AuthProvider, useAuth };
