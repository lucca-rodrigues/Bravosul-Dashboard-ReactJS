import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import { Form, Search } from '@unform/web';
import { useField } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import { Container, Row, Col, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { Content } from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';


import api from '../../Services/api';


const EditProducts = () => {
  const {id} = useParams();

  const [data, setData] = useState({})
  const name = data.name;
  const description = data.description;
  const enabled = data.enabled;


  useEffect((data) => {
    const handleDetails = () => {
      api.put(`/products/${id}`, data,{
        headers: {
          Authorization: 'Bearer' + localStorage.getItem('@BravosulDashboard:token'),
        },
      })
      .then((response) => {
        setData(response.data);

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
              <h1>Edit Product</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form initialData={{name: name, description: description, enabled:enabled}}>
                <label>Product name</label>
                <Input name="name"/>

                <label>Product description</label>
                <Input name="description"/>

                <label>Product status</label>
                <Input type="checkbox" name="enabled"/>
                <Button type="submit">Save</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Content>
    )
}


export default EditProducts;
