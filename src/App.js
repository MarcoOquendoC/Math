import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';

const App = () => (
  <Router className="App">
    <Navbar />
    <Routes>
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Home" element={<Home />} />
      <Route path="Quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default App;
