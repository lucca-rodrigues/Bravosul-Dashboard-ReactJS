import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import api from '../../Services/api';



const DetailProducts = () => {
  const {id} = useParams();
  const [details, setDetails] = useState({})

  useMemo((data) => {
    const handleDetails = () => {
      api.get(`/products/${id}`, data,{
        headers: {
          Authorization: 'Bearer' + localStorage.getItem('@BravosulDashboard:token'),
        },
      })
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
    };
    handleDetails();

  },[id]);

    return (
        <Container>
          <Row>
            <Col>
              <h1>{details && details.name}</h1>
              <p>{details.description}</p>
              <p>Produto Id: {id}</p>
            </Col>
          </Row>
        </Container>
    )
}


export default DetailProducts;
