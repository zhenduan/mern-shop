import React from 'react';
import products from '../products';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Card className="mt-3">
      <Link to={`/products/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>

      {/* <Card.Img variant="top" src={require('../images/airpods.jpg')} /> */}

      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        {/* <Card.Text>{`${product.rating} of ${product.numReviews} reviews `}</Card.Text> */}
        <Rating value={product.rating} text={product.numReviews} />
        <Card.Title className="mb-2 text-muted">{product.price}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

// products.map((product) => {
//   return <h1>{product.name}</h1>;
// });
