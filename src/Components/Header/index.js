import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Content } from './styles'


const Header = () => {
  return (
    <Content>
      <Container>
        <Row>
          <Col>
            <img src="https://bravosul.com.br/logo-bravosul.svg" alt="Logo Bravosul"/>
          </Col>
          <Col>
            <Link to="/login">
              Área de membros
            </Link>
          </Col>
        </Row>
      </Container>
    </Content>
  )
}

export default Header;
