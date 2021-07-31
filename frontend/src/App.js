import React from 'react';

import './App.css';

import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import Logos from './components/Logos';
import Boxes from './components/Boxes';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => (
  <div>
    <GlobalStyles />
    <Header />
    <Logos />
    <Boxes />
    <Contact />
    <Newsletter />
    <Footer />
  </div>
);

export default App;
