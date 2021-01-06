import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';


import Placeholder from '../../Assets/placeholder.jpg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import { Content } from './styles';

import api from '../../Services/api';

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleProducts = () => {
      api.get(`products`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log("Falha ao consultar produtos", error);
        })
    };
    handleProducts();

  }, []);
  return (
    <Content>
      <Header />
      <Container>
        <Row>
          {products.map(item => (
            <>
              {item.enabled === true ? (
                <Col>
                  <Card style={{ width: '15rem' }} key={item.id}>
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ) : ''}
            </>
          ))}
        </Row>
      </Container>
      <Footer />
    </Content>
  )
}


export default ListProducts;
