import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import Navbar from  './Navbar/Navbar'



function App() {
  return (
    <div className="App">
      <div className="Navbar">
      <Navbar />
      </div>
      <div>
        <div className="QuoteCard">
          <div className="tablon">
            <QuoteCard />
            <QuoteCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
