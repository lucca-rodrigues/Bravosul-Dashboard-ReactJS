import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


import api from '../Services/api';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const history = useHistory();
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

    api.interceptors.response.use(
      response => response,
      err => {
        if(err.response.status === 401){
          toast.error('Your token is expired or invalid, please log in again');
          signOut();
          history.push('/login');
        }
        throw err;
      },
    );

    const signOut = useCallback(() => {
      localStorage.removeItem('@BravosulDashboard:token');
      localStorage.removeItem('@BravosulDashboard:user');

      setData({});
    }, []);

    const signIn = useCallback(async ({ email, password }) => {
      const response = await api.post('/sessions', {
        identifier: email,
        password : password,
      });

      const token = response.data && response.data.token.token;
      const id = response.data.user.id;
      const identifier = response.data && response.data.user.email;
      const username = response.data && response.data.user.username;

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
