import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetail } from '../actions/productActions';
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Rating from '../components/Rating';

const ProductScreen = () => {
  let history = useHistory();
  // redux version
  const dispatch = useDispatch();
  let { id } = useParams();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetail;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(listProductDetail(id));
  }, [dispatch]);

  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`);
  };

  return (
    <Container>
      <Row>
        <Link className="btn btn-primary" to="/">
          Go Back
        </Link>
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
            {product.countInStock > 0 && (
              <ListGroup.Item>
                Qty:
                <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </ListGroup.Item>
            )}

            <ListGroup.Item>
              <Button
                className={
                  product.countInStock > 0
                    ? 'btn btn-primary'
                    : 'btn btn-primary disabled'
                }
                onClick={addToCartHandler}
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
