import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Table, Modal, Button } from 'react-bootstrap';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Content } from './styles';

import api from '../../Services/api';


const Dashboard = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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


  const handleRemoveItem = (id) => {

    api.delete(`/products/${id}`)
      .then(() => {
        console.log(id)
        toast.success("Produto removido com sucesso!");
        history.pushState('/')

      })
      .catch((error) => {
        toast.error("Falha ao remover produto, verifique se o seu token é válido ou faça o login novamente!");
      })
  };


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
                {products ? products.map(({ id, name, description, enabled }) => (
                  <>
                    {enabled === true ? (
                      <tr key={id}>
                        <td>{name}</td>
                        <td>{description}</td>
                        <td>
                          <Link to={`/products/${id}`}>
                            <FaEye />
                          </Link>
                        </td>
                        <td>
                          <Link to={`/edit/${id}`}>
                            <FaPencilAlt />
                          </Link>
                        </td>
                        <td onClick={() => handleRemoveItem(id)}>
                          <FaTrash />
                        </td>
                      </tr>
                    ) : ''}
                  </>

                )) : 'loading...'}
              </tbody>
            </Table>
          </Col>
        </Row>
        {/* <Row>
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
        </Row> */}
      </Container>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete products</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Content>
  )
}


export default Dashboard;
