import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Select, Input } from "@rocketseat/unform";
import { toast } from 'react-toastify';

import { Container, Row, Col } from 'react-bootstrap';
import { Content } from './styles';
import ButtonPrev from '../../Components/ButtonPrev';
import Button from '../../Components/Button';

import api from '../../Services/api';

const options = [
  { id: false, title: 'Disabled' },
  { id: true, title: 'Enabled', },
];

function NewProducts() {

  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    api.post('/products', {
      title: data.title,
      description: data.description,
      enabled: Boolean(data.enabled),
    })
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
        history.push('/dashboard');
      })
      .catch((error) => {
        toast.error("Erro ao realizar Cadastro, verifique se as informações estão corretas!")
      })

  }, [history]);

  return (
    <Content>
      <Container>
        <Row className="title-page">
          <Col>
            <h1>Create Products</h1>
          </Col>
        </Row>
        <ButtonPrev/>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <label>Product name</label>
              <Input name="title" placeholder="Name" />

              <label>Product description</label>
              <Input name="description" placeholder="description" />

              <label>Product Initial status</label>
              <Select
                name="enabled"
                options={options}
              />

              <Button type="submit">Send</Button>
            </Form>

          </Col>
        </Row>
      </Container>
    </Content>

  );
}

export default NewProducts;
