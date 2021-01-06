import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Content } from './styles';

import { useAuth } from '../../Context/AuthContext';
import api from '../../Services/api';


const Dashboard = () => {
    const history = useHistory();
    const {signOut} = useAuth();
    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const handleProducts = () => {
        api.get(`products`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          toast.error("Falha ao consultar produtos, tente novamente mais tarde!");
        })
      };
      handleProducts();

    },[])

    const handleDetails = (item) => {
      return history.push(`/products/${item.id}`)

      console.log(item.id);
    }


    const handleEdit = () => {
      return history.push('/edit/1')
    }

    const handleRemove = () => {
      alert('Tem certeza que deseja remover este Produto?')
    }

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
              <h1>Meus produtos Ativos:</h1> <br/>
                <ul>
                  {products.map(item => (
                    <>
                      {item.enabled === true ? (
                        <li key={item.id}>
                          {item.name} -  {item.description} <Link to={`/products/${item.id}`}><FaEye /></Link> <FaPencilAlt onClick={handleEdit}/> <FaTrash onClick={handleRemove}/>
                        </li>
                      ) : ''}
                    </>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </Content>
    )
}


export default Dashboard;
