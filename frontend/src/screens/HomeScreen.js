import React, { Component } from 'react';
import products from '../products';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

function HomeScreen() {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col xs={12} lg={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;

// products.map((product) => {
//   return <h1>{product.name}</h1>;
// });
