import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './Header'; 
import MainContent from './MainContent'; 
import Footer from './Footer';
import './Styles.css';
import About from './about';
import Contact from './Contact';
import Courses from './Courses';
import Career from './Career';
import { Helmet } from 'react-helmet'; // Import react-helmet for title and favicon management
import Resources from './Resources';

function App() {
  return (
    <>
      <Helmet>
  <title>Amri Trades VSR</title> {/* Replace with your site title */}
  <link rel="icon" type="image/png" href="./AmriTrades.jpg" /> {/* Use absolute path from public folder */}
</Helmet>

      <Router>
        <Header />
        <Routes>  
          <Route path="/" element={<MainContent />} />  
          <Route path="/about" element={<About />} />  
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/career" element={<Career />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
