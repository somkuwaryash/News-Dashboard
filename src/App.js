import './App.css';
import React, { useEffect } from'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import { useState } from 'react';



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(darkMode => !darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  });

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">News Dashboard</Navbar.Brand>
        <Nav className="ml-auto">
        </Nav>
        <Nav className="theme-toggler">
        <Nav.Item onClick={handleDarkMode} style={{cursor: 'pointer'}}>
          {darkMode ? '🌙' : '☀️'}
        </Nav.Item>
        </Nav>
      </Navbar>
      <Container className='mt-4'>
        <h3>Latest News</h3>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
