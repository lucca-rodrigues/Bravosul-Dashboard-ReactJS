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
  const [open, setOpen] = useState(false);
  const [reloadingProducts, setReloadingProducts] = useState(false);
  const [removeId, setRemoveId] = useState();


  useEffect(() => {
    const handleProducts = () => {
      api.get(`products`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch(() => {
          toast.error("Falha ao consultar produtos, tente novamente mais tarde!");
        })

    };
    handleProducts();


  }, [history, reloadingProducts]);


  const handleRemoveItem = (id) => {
    api.delete(`/products/${id}`)
      .then(() => {
        console.log(id)
        toast.success("Produto removido com sucesso!");
        setReloadingProducts(true);
        //setShow(false);

      })
      .catch((error) => {
        toast.error("Falha ao remover produto, tente novamente mais tarde!");
        console.log(error);
      })

    if (reloadingProducts === true) {
      return history.push('/');
    }

  };

  return (
    <Content>
      <Container>
        <Row>
          <Col>
            <h2>My products enabled</h2>
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
                        <td onClick={() => {
                          setRemoveId(id)
                          setOpen(true)
                        }}>
                          <FaTrash />
                        </td>
                      </tr>
                    ) : ''}
                  </>

                )) : 'Products Not found.'}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>My products disabled</h2>
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
                    {enabled === false || null ? (
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
                        <td onClick={() => {
                          setRemoveId(id)
                          setOpen(true)
                        }}>
                          <FaTrash />
                        </td>
                      </tr>
                    ) : ''}
                  </>

                )) : 'Products Not found.'}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Modal show={open} onHide={!open} animation={false}>
          <Modal.Header>
            <Modal.Title>Delete products</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {
              handleRemoveItem(removeId)
              setRemoveId('')
              setOpen(false)
            }}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Content>
  )
}


export default Dashboard;
