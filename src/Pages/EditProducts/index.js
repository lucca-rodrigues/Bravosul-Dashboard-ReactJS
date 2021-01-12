import React, {useState, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Form, Select, Input } from "@rocketseat/unform";

import { Container, Row, Col } from 'react-bootstrap';
import { Content } from './styles';
import Button from '../../Components/Button';
import ButtonPrev from '../../Components/ButtonPrev';

import { useParams } from 'react-router-dom';

import api from '../../Services/api';

const options = [
  { id: 0, title: 'Disabled' },
  { id: 1, title: 'Enabled', },
];

const EditProducts = () => {
  const {id} = useParams();
  const history = useHistory();

  const [details, setDetails] = useState({})

  const name = details.name;
  const description = details.description;
  const enabled = details.enabled;


  useEffect((data) => {
    async function handleDetails (){
      await api.get(`/products/${id}`, data)
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



  const handleUpdateDetails = useCallback(async (data) => {
    api.put(`/products/${id}`, {
      name: data.name,
      description: data.description,
      enabled: Number(data.enabled)
    })
    .then((response) => {
      toast.success("Produto atualizado com sucesso!")
      console.log(response.data);
      history.push('/dashboard');

    })
    .catch((error) => {
      toast.error("Falha ao atualizar os dados deste produto!");
      console.log(error);
    })
  }, [id, history]);

    return (
      <Content>
        <Container>
          <Row className="title-page">
            <Col>
              <h1>Edit Product</h1>
            </Col>
          </Row>
          <ButtonPrev/>
          <Row>
            <Col>
              <Form
                initialData={{name: name, description: description, enabled:enabled}}
                onSubmit={handleUpdateDetails}>
                <label>Product name</label>
                <Input name="name"/>

                <label>Product description</label>
                <Input name="description"/>

                <label>Product status</label>
                <Select
                name="enabled"
                options={options}
              />
                <Button type="submit">Save</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Content>
    )
}


export default EditProducts;
