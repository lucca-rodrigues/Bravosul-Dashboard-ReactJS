import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Container, Row, Col } from 'react-bootstrap';
import { Content } from './styles';

import { useAuth } from '../../Context/AuthContext';
import api from '../../Services/api';


const Dashboard = () => {


     const {signOut} = useAuth();
    // const [data, setData] = useState([]);


    // useEffect(() => {
    //   const handleProducts = (data) => {
    //     api.get(`products`, data, {
    //       //headers: { Authorization: `Bearer ${localStorage.getItem('@BravosulDashboard:token')}`}
    //     })
    //     .then((response) => {
    //       setData(response.data);
    //     })
    //     .catch((error) => {
    //       toast.error("Falha ao consultar produtos, tente novamente mais tarde!");
    //     })
    //   };
    //   handleProducts();

    // },[])

    return (
        <Content>
          <Container>
            <Row>
              <button onClick={signOut}>Sair</button>
            </Row>
            <Row>
              <Col>
                Menu aqui
              </Col>
              <Col>
                Produtos: <br/>
                {/* <ul>
                  {data.map(item => <li key={item.id}>{item.name} -  {item.description}</li>)}
                </ul> */}
              </Col>
            </Row>
          </Container>
        </Content>
    )
}


export default Dashboard;
