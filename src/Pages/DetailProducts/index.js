import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import Button from '../../Components/Button';
import ButtonPrev from '../../Components/ButtonPrev';


import { Content } from './styles';

import Placeholder from '../../Assets/placeholder.jpg';

import api from '../../Services/api';



const DetailProducts = () => {
  const {id} = useParams();
  const [details, setDetails] = useState({})

  useEffect((data) => {
    async function handleDetails () {
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
            <Col sm={12} md={4} lg={6}>
              <img src={Placeholder} alt="Placeholder"/>
            </Col>
            <Col sm={12} md={8} lg={6} className="description">
              <p>Produto Id: {id}</p>
              <h2>{details.name ||  '-'}</h2>
              <p>{details.description || '-'}</p>
                <Link to="/dashboard">
                  <Button>Prev to dashboard</Button>
                </Link>
            </Col>
          </Row>
        </Container>
      </Content>
    )
}


export default DetailProducts;
