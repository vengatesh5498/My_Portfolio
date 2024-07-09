import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Works } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Testimonials />
      <Footer />

    </div>
  );
}

export default App;