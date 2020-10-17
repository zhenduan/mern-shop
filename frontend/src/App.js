import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main mt-5">
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/products/:id">
            <ProductScreen />
          </Route>
          <Route path="/cart/:id?">
            <CartScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/register">
            <RegisterScreen />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
