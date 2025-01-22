// src/App.js
import React from 'react';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>Welcome to Our Blog</h1>
      </header>
      <main>
        <AboutUs />
      </main>
    </div>
  );
}

export default App;
