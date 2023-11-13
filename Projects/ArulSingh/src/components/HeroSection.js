import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='\website.mp4' autoPlay loop muted />
      <h1>DESIGN</h1>
      <p>I edit videos and create animations using Adobe After Effects and Adobe Premiere Pro</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo={"https://www.instagram.com/arul.singh23/"}
          openInNewTab={true}
        >
          Instagram
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          linkTo={'https://www.youtube.com/channel/"UC18_tZv0GUBuxzjWnlfLmgQ'}
          openInNewTab={true}
        >
          Youtube <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;