import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Basket from './components/Basket'; // Import Basket component
import PaymentForm from './components/PaymentForm'; // Import the PaymentForm component

function App() {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={
              <Menu 
                onAddToBasket={handleAddToBasket} 
                basket={basket} // Pass basket as a prop
              />
            }
          />
          <Route
            path="/basket"
            element={<Basket basket={basket} />}
          />
          <Route
            path="/payment"
            element={<PaymentForm basket={basket} />} // Payment form route
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
