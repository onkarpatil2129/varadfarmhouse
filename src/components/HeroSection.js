import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>वरद फार्म हाऊस</h1>
      <p>Be at one with nature in a farmhouse surrounded by magnificent hills and lush greenery.</p>
      <p>So what are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={event => window.location.href = '/Bookings'}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;