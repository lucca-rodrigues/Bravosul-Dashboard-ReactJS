import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import {  Row, Col } from 'react-bootstrap';
import Button from '../Button';



const ButtonPrev = () => {
  return (
    <Row className="button-prev">
      <Col>
        <Link to="/dashboard">
          <Button><FaArrowLeft/> Prev </Button>
        </Link>
      </Col>
    </Row>
  )
}

export default ButtonPrev;
