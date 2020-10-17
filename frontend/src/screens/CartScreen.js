import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Row, Col, Button, ListGroup, Form, Image } from 'react-bootstrap';

const CartScreen = () => {
  let { id } = useParams();
  const location = useLocation();
  // const productId = match.params.id;
  const productId = id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  // delete item handler
  const deleteItemHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, qty, productId]);
  console.log(cartItems);
  return (
    <div>
      <div className="container">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 && <p>cart is empty</p>}
        <Row>
          <Col col={9}>
            {cartItems.map((item) => (
              <Row className="mt-3">
                <Col md={3}>
                  {' '}
                  <Image src={item.image} rounded fluid />
                </Col>
                <Col md={3}>{item.name}</Col>
                <Col md={2}>{item.price}</Col>
                <Col md={2}>
                  {' '}
                  <Form.Control
                    as="select"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart(item.productId, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2} onClick={() => deleteItemHandler(item.productId)}>
                  Delete
                </Col>
              </Row>
            ))}
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item>Subtotal: {cartSubtotal} items</ListGroup.Item>
              <ListGroup.Item>Price: {totalPrice}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CartScreen;
