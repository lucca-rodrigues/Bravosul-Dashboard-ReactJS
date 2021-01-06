import React, { useCallback, useRef } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
// import * as Yup from 'yup';

import { Container, Content} from './styles';
// import Logo from '../../Assets/logo-pages.svg';
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

      // const schema = Yup.object().shape({
      //   email: Yup.string()
      //     .email('Digite um e-mail válido')
      //     .required('E-mail obrigatório'),
      //   password: Yup.string().required('Senha obrigatória'),
      // });

      // await schema.validate(data, {
      //   abortEarly: false,
      // });

      await signIn({
        id: data.id,
        email: data.email,
        password: data.password,
      });
      history.push("/dashboard");
      toast.success("Login realizado com sucesso!");

    } catch (err) {
      // if (err instanceof Yup.ValidationError) {

      //   formRef.current?.setErrors(err);
      // }
      toast.error("Erro ao realizar login, verifique se suas credenciais estão corretas!")
    }

  }, [history, signIn]);

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email"/>
          <Input name="password" placeholder="Password" type="password"/>
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/register">Não tenho uma conta?</Link>
      </Content>
    </Container>
  );
}

export default Login;
