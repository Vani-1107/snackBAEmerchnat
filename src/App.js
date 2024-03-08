//import logo from './logo.svg';
import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import './App.css';
import Footer from './components/Footer';
import Footer1 from './components/Footer2';
import Photos from './components/Photos';


function App() {
  return (
  <div className='overflow-hidden'>
    <Navigation/>
    <Home/>
    {/* <Footer/>  */}
  </div>
  );
}

export default App;
