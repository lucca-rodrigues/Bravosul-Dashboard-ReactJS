import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../Services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
      const token = localStorage.getItem('@BravosulDashboard:token');
      const identf = localStorage.getItem('@BravosulDashboard:identifier');
      const id = localStorage.getItem('@BravosulDashboard:id');

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;

        return { token, identf: JSON.parse(identf), id: id };
      }

      return ({id, token, identf});
    });

    const signOut = useCallback(() => {
      localStorage.removeItem('@BravosulDashboard:token');
      localStorage.removeItem('@BravosulDashboard:identifier');
      localStorage.removeItem('@BravosulDashboard:id');

      setData({ id: '', token: '', identf: ''});
    }, []);

    const signIn = useCallback(async ({ email, password }) => {
      const response = await api.post('/auth/local', {
        identifier: email,
        password,
      });

      const token = response.data && response.data.jwt;
      const {id, username} = response.data.user
      const identf = response.data && response.data.email;


      console.log(response.data);

      localStorage.setItem('@BravosulDashboard:token', token);
      localStorage.setItem('@BravosulDashboard:user', JSON.stringify({id, username, identf}));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ id, token, identf});
    }, []);


    return (
      <AuthContext.Provider
        value={{ token: data.jwt, identifier: data.identifier, id: data.id, username: data.username, signIn, signOut //, updateUser
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
