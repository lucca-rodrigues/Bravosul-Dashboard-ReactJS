import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
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
    <Container>
      <Row>
        {products.map(item => (
          <>
            {item.enabled === true ? (
              <Col>
                <Card style={{ width: '18rem' }} key={item.id}>
                  <Card.Img variant="top" src="holder.js/100px180" />
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
  )
}


export default ListProducts;
