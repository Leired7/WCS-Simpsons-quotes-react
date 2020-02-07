import React from 'react';
import Navbar from './Navbar/Navbar.js'
import './App.css';
import QuoteCard from './components/QuoteCard.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard />
      </div>
  );
}

export default App;
