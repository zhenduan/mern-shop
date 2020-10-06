import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main mt-5">
        <HomeScreen />
      </div>
      <Footer />
    </div>
  );
}

export default App;
