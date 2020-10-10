import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import products from '../products';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product._id} xs={12} sm={6} lg={4}>
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
