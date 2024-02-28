//import logo from './logo.svg';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
  <div>
    <Navigation/>
    <Home/>
    <About/>
    <Menu/>
    <Footer/>
  </div>
  );
}

export default App;
