import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

import { Container, Row, Col, Table } from 'react-bootstrap';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Content } from './styles';

//import { useAuth } from '../../Context/AuthContext';
import api from '../../Services/api';


const Dashboard = () => {
  const history = useHistory();
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

  }, []);

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
          <Col>
            <h2>Meus Produtos  Ativos</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Trash</th>
                </tr>
              </thead>
              <tbody>
                {products ? products.map(item => (
                  <>
                    {item.enabled === true ? (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                          <Link to={`/products/${item.id}`}>
                            <FaEye />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/edit/${item.id}`}>
                            <FaPencilAlt />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/products/${item.id}`}>
                            <FaTrash />
                          </Link>
                        </td>
                      </tr>
                    ) : ''}
                  </>

                )) : 'loading...'}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Meus Produtos Desativados:</h2> <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Trash</th>
                </tr>
              </thead>
              <tbody>
                {products ? products.map(item => (
                  <>
                    {item.enabled === false || null ? (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td><Link to={`/products/${item.id}`}><FaEye /></Link></td>
                        <td><FaPencilAlt onClick={handleEdit} /></td>
                        <td><FaTrash onClick={handleRemove} /></td>
                      </tr>
                    ) : ''}
                  </>

                )) : 'loading...'}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Content>
  )
}


export default Dashboard;
