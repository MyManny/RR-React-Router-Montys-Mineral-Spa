
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>
          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Link to='/'>
                  <Nav.Link href="/">
                    Home
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to='/about'>
                  <Nav.Link href="/about">
                    About Us
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to='/packages'>
                  <Nav.Link href="/packages">
                    Our Packages
                  </Nav.Link>
                </Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages packages={packages} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;




