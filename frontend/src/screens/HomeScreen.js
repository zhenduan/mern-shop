import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

function HomeScreen() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <span className="center-element">
          <Spinner animation="grow" />
        </span>
      ) : error ? (
        <Message message={error} variant="danger" />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={12} sm={6} lg={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default HomeScreen;

// products.map((product) => {
//   return <h1>{product.name}</h1>;
// });
