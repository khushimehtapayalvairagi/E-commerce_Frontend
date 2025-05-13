import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import './Footer.css'
const Footer = () => {
  return (
   <div>
     <footer>
    <div class="footer">
      <div class="footer-column">
        <h3>Company</h3>
        <li>Blog</li>
        <li>Press</li>
        <li>JOb</li>
        <li>partners</li>

      </div>

      <div class="footer-column">
        <h3>Solutions</h3>
        <li>Marketing</li>
        <li>Analytics</li>
        <li>Insights</li>
        <li>Commerece</li>
        <li>Support</li>
      </div>

      <div class="footer-column">
        <h3>Documentation</h3>
        <li>Api Status</li>
        <li>Guides</li>
      </div>

      <div class="footer-column">
        <h3>Legal</h3>
        <li>Claim</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Terms and Conditions</li>
      </div>

    

      
    </div>
    <div class="footer-bottom">
      © 2025 My company All rights reserved.
      <br></br>
      made with love by me
    </div>
  </footer>
   </div>
  );
};

export default Footer;
