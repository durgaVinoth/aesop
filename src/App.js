import React from 'react';
import Header from './components/header';
import './App.css';
import Navbar from './components/navbar';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Footer from './footer';





function App() {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Footer/>
       
    </div>
  );
}

export default App;
