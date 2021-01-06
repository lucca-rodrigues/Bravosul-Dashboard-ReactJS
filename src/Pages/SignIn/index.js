import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Content } from './styles';

const SignIn = () => {
    return (
        <Content>
          <form>
            <Container>
              <Row>
                <Col>
                  <input placeholder="User name"/>
                  <input placeholder="E-mail"/>
                  <input placeholder="Password"/>
                  <button>Submit</button>
                </Col>
              </Row>
            </Container>
          </form>
        </Content>
    )
}


export default SignIn;
