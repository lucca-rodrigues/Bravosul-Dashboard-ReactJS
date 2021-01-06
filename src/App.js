import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';

import {AuthProvider} from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';

import Routes from './Routes'
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
