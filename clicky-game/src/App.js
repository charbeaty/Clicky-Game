import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import MainGameContainer from './components/MainContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <MainGameContainer />
    </div>
  );
}

export default App;


