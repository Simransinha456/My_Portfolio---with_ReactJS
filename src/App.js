import React from 'react';
import Contact from './components/contact/Contact.js';
import Experience from './components/experience/Experience.js';
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Intro from './components/intro/Intro.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Topbar from './components/topbar/Topbar.js';

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
