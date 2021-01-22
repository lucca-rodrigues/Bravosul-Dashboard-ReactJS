import React, { useCallback } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Input } from "@rocketseat/unform";


import { Container, Content} from './styles';
import Button from '../../Components/Button';

import api from '../../Services/api';


const SignIn = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async ({username, identifier, password} ) => {
    api.post('/users', {
      username,
      identifier,
      password
    })
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
        history.push('/login');
      })
      .catch(() => {
        toast.error("Erro ao realizar Cadastro, verifique se as informações estão corretas!")
      })

  }, [history]);


  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <img src="https://bravosul.com.br/logo-bravosul.svg" alt="Logo Bravosul"/>
          <Input name="username" placeholder="Username"/>
          <Input name="identifier" placeholder="Email"/>
          <Input name="password" placeholder="Password" type="password"/>
          <Button type="submit">SignIn</Button>
        </Form>
        <Link to="/login">Já tenho uma conta?</Link>
      </Content>
    </Container>
  );
}

export default SignIn;
