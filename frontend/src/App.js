import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Switch>
      <div className="App">
        <Header />
        <div className="main mt-5">
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/products/:id">
            <ProductScreen />
          </Route>
        </div>
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
