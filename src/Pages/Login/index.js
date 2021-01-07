import React, { useCallback, useRef } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
// import * as Yup from 'yup';

import { Container, Content} from './styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { useAuth } from '../../Context/AuthContext';

const Login = () => {
  const formRef = useRef(null);

  const {user, signIn} = useAuth();
  const history = useHistory();


  console.log(user);
  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({});

      await signIn({
        id: data.id,
        email: data.email,
        password: data.password,
      });
      history.push("/dashboard");
      toast.success("Login realizado com sucesso!");

    } catch (err) {
      toast.error("Erro ao realizar login, verifique se suas credenciais estão corretas!")
    }

  }, [history, signIn]);

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <img src="https://bravosul.com.br/logo-bravosul.svg" alt="Logo Bravosul"/>
          <Input name="email" placeholder="Email"/>
          <Input name="password" placeholder="Password" type="password"/>
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/">Não tenho uma conta?</Link>
      </Content>
    </Container>
  );
}

export default Login;
