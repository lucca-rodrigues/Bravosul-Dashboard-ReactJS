import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Content, Exit } from './styles';

import Logo from '../../Assets/logo-drawer.svg';
import Home from '../../Assets/home.svg';
import New from '../../Assets/new.svg';
import All from '../../Assets/all.svg';
import Account from '../../Assets/account.svg';
import ExitImage from '../../Assets/exit.svg';
import { useAuth } from '../../Context/AuthContext';

const NavigationBar = ({ children }) => {
  const { signOut } = useAuth();

  return (
    <Row>
      <Col>
        <Content>
          <Link to="/">
            <img src={Logo} alt="Logo" width="50" />
          </Link>
          <span>
            <Link to="/dashboard">
              <img src={Home} alt="Home" width="50" />
                  Home
                </Link>
          </span>
          <span>
            <Link to="/products/new">
              <img src={New} alt="New" width="50" />
                  Add New
                </Link>
          </span>
          {/* <span>
              <Link to="/products">
                <img src={All} alt="All" width="50"/>
                 All products
              </Link>
          </span> */}
          <span onClick={signOut}>
            <img src={Account} alt="Account" />
              Loggout
          </span>
        </Content>
      </Col>
      <Col>
        <Exit>
          <span onClick={signOut}>
            Sair <img src={ExitImage} alt="Exit" />
          </span>
        </Exit>
        {children}
      </Col>
    </Row>
  )
}

export default NavigationBar;
