import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../Components/Button';

import { Content } from './styles';

import Placeholder from '../../Assets/placeholder.jpg';

import api from '../../Services/api';



const DetailProducts = () => {
  const {id} = useParams();
  const [details, setDetails] = useState({})

  useEffect((data) => {
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
      <Content>
        <Container>
          <Row className="title-page">
            <Col>
              <h1>Product Details</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={Placeholder} alt=""/>
            </Col>
            <Col>
              <p>Produto Id: {id}</p>
              <h2>{details && details.name}</h2>
              <p>{details && details.description}</p>
                <Link to="/dashboard">
                  <Button>Voltar</Button>
                </Link>
            </Col>
          </Row>
        </Container>
      </Content>
    )
}


export default DetailProducts;
