import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Content } from './styles';

import api from '../../Services/api';

const ListProducts = () => {
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

    },[]);
    return (
      <ul>
        {products.map(item => (
          <>
            {item.enabled === true ? (
              <li key={item.id}>
                {item.name} -  {item.description} <Link to={`/products/${item.id}`}><FaEye /></Link> <FaPencilAlt /> <FaTrash />
              </li>
            ) : ''}
          </>
        ))}
    </ul>
    )
}


export default ListProducts;
