import React, { Component } from 'react';
import products from '../products';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ProductCard({ product }) {
  return (
    <Card>
      <a href={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </a>

      {/* <Card.Img variant="top" src={require('../images/airpods.jpg')} /> */}

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <Card.Text>{`${product.rating} of ${product.numReviews} reviews `}</Card.Text>
        <Card.Title className="mb-2 text-muted">{product.price}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

// products.map((product) => {
//   return <h1>{product.name}</h1>;
// });
