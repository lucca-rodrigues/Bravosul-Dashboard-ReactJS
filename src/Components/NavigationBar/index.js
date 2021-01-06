import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Content, Exit } from './styles';

import { FaPlusCircle, FaHouseDamage, FaUser } from 'react-icons/fa';

import ExitImage from '../../Assets/exit.svg';
import Header from '../../Components/Header';

import { useAuth } from '../../Context/AuthContext';

const NavigationBar = ({ children }) => {
  const { signOut } = useAuth();

  return (
    <Row>
      <Col className="main-menu">
        <Content>
          <Link to="/">
            <img src="https://bravosul.com.br/logo-bravosul.svg" alt="Logo Bravosul" width="60"/>
          </Link>
          <span>
            <Link to="/dashboard">
              <FaHouseDamage size={25}/>
              Home
            </Link>
          </span>
          <span>
            <Link to="/products/new">
              <FaPlusCircle size={25}/>
              Add New
            </Link>
          </span>
          <span onClick={signOut}>
            <FaUser size={25} color="#fff"/>
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
