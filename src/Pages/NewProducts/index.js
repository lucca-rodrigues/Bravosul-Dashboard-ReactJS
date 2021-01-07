// import React, { useCallback, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { Form, Select } from "@rocketseat/unform";

// import { Container, Row, Col } from 'react-bootstrap';
// import { Content } from './styles';

// import Input from '../../Components/Input';
// import CheckboxInput from '../../Components/Checkbox';
// import Button from '../../Components/Button';


// import api from '../../Services/api';

// const enableOption = [
//   {id: 1, value: true},
//   {id: 2, value: false},
// ]

// function NewProducts () {
//   const history = useHistory();

//   const handleSubmit = useCallback(async (data) => {
//     // try {

//     //   api.post('/products', data,{
//     //     headers: {
//     //       Authorization: 'Bearer' + localStorage.getItem('@BravosulDashboard:token'),
//     //     },
//     //   })

//     //   toast.success("Cadastro realizado com sucesso!");
//     //   history.push('/');

//     // } catch (err) {
//     //   toast.error("Erro ao realizar Cadastro, verifique se as informações estão corretas!")
//     // }

//   }, []);
//   return (
//     <Content>
//       <Container>
//         <Row className="title-page">
//           <Col>
//             <h1>Edit Product</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Form onSubmit={handleSubmit}>
//               <label>Product name</label>
//               <Input name="name" placeholder="Name"/>

//               <label>Product description</label>
//               <Input name="description" placeholder="description"/>

//               <Select
//                 name="tech"
//                 options={enableOption}
//                 onChange={e => console.log(e.target.value)}
//               />

//               <Button type="submit">Save</Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </Content>
//   );
// }

// export default NewProducts;


import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Select, Input } from "@rocketseat/unform";
import { toast } from 'react-toastify';

import { Container, Row, Col } from 'react-bootstrap';
import { Content } from './styles'

import api from '../../Services/api';

const options = [
  { id: 1, title: 'true' },
  { id: 2, title: 'false' },
];

function NewProducts() {

  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    try {

      api.post('/products', {
        name: data.name,
        description: data.description,
        enabled: Number(data.enabled)
     })

      toast.success("Cadastro realizado com sucesso!");
      history.push('/dashboard');

    } catch (err) {
      toast.error("Erro ao realizar Cadastro, verifique se as informações estão corretas!")
    }

  }, []);

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
