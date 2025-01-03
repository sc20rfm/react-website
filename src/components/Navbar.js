import React, { useState } from 'react'; // Import React and useState hook
import Logo from '../assets/pizzaLogo.png'; // Import the logo image
import { Link } from 'react-router-dom'; // Import Link component for navigation
import ReorderIcon from '@mui/icons-material/Reorder'; // Import reorder icon for hamburger menu
import '../styles/Navbar.css'; // Import the CSS styles for the Navbar component

function Navbar() {
  
  // State to track whether the navbar links are open or closed (for mobile view)
  const [openLinks, setOpenLinks] = useState(false);

  // Function to toggle the navbar (open or close)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks); // Toggle the state of openLinks
  }

  return (
    <div className='navbar'> {/* Main container for the navbar */}
      
      {/* Left side of the navbar, including the logo and hidden links */}
      <div className="leftSide" id={openLinks ? "open" : "close"}> 
        {/* Logo */}
        <img src={Logo} alt="Pizza Logo" />
        
        {/* Hidden links, which will be shown/hidden depending on the navbar state */}
        <div className="hiddenLinks">
          {/* Links for navigation */}
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      
      {/* Right side of the navbar, always visible with the links and toggle button */}
      <div className="rightSide">
        {/* Links for navigation */}
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        
        {/* Button to toggle the navbar on small screens */}
        <button onClick={toggleNavbar}>
          <ReorderIcon /> {/* Hamburger menu icon */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
