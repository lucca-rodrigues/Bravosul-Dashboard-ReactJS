import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Select, Input } from "@rocketseat/unform";
import { toast } from 'react-toastify';

import { Container, Row, Col } from 'react-bootstrap';
import { Content } from './styles'

import api from '../../Services/api';

const options = [
  { id: 0, title: 'Disabled' },
  { id: 1, title: 'Enabled', },
];

function NewProducts() {

  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    api.post('products', {
      name: data.name,
      description: data.description,
      enabled: Number(data.enabled)
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
            <h1>Edit Product</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Input name="name" placeholder="Name" />

              <Input name="description" placeholder="description" />

              <Select
                name="enabled"
                options={options}
              />

              <button type="submit">Send</button>
            </Form>

          </Col>
        </Row>
      </Container>
    </Content>

  );
}

export default NewProducts;
