// App.js
import React from 'react';
import './App.css'; // Import your CSS file
import Header from './Components/Header';
import Hero from './Components/Hero';
import TopHeader from './Components/TopHeader';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
