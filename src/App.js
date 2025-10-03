import React from 'react';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <div className="container flex-grow-1 py-4">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;