import React from 'react';

import Header from './componenets/header';
import Footer from './componenets/footer';
import Home from './pages/home';

import './app.style.scss';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <div className="app-content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;