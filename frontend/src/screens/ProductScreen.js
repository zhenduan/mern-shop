import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
//import products from '../products';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = () => {
  const [product, setProduct] = useState('');
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setProduct(response.data);
    };

    fetchProduct();
  }, []);

  // console.log(id);
  // let product = products.find((p) => p._id === id);
  return (
    <Container>
      <Row>
        <Button className="btn btn-primary">Go Back</Button>
      </Row>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>{product.name}</ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>
              {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className={
                  product.countInStock > 0
                    ? 'btn btn-primary'
                    : 'btn btn-primary disabled'
                }
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
