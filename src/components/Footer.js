import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram'; // Import Instagram icon
import XIcon from '@mui/icons-material/X'; // Import X icon
import FacebookIcon from '@mui/icons-material/Facebook'; // Import Facebook icon
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon
import "../styles/Footer.css"; // Import the CSS styles for the footer

function Footer() {
  return (
    <div className="footer"> {/* Container div for the footer */}
      <div className="socialMedia"> {/* Section for social media icons */}
        {/* Render social media icons */}
        <InstagramIcon /> 
        <XIcon /> 
        <FacebookIcon /> 
        <LinkedInIcon />
      </div>

      {/* Footer text displaying copyright notice */}
      <p> &copy; 2021 dijaspizza.com</p> 
    </div>
  );
}

export default Footer;
