import React from 'react'
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { Content } from './styles';
import Button from '../../Components/Button';

import Icon from '../../Assets/icon.png';


const NotFound = () => {

    return (
      <Content>
        <Container>
          <Row>
            <Col>
            <h2>Page not found</h2>
            <Link to="/">
              <Button>Go to Home?</Button>
            </Link>
            </Col>
            <Col>
              <img src={Icon} alt="icon not found" />
            </Col>
          </Row>
        </Container>
      </Content>
    )
}


export default NotFound;
