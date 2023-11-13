import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my Previous Work!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              instagramUrl="https://www.instagram.com/reel/CnClLBKuInv/"
              text='My First Ever Video I made for Amalthea 22.'
              label='Amalthea 22'
              path='/instagram'
            />
            <CardItem
              instagramUrl="https://www.instagram.com/reel/Cnpgo2RPduj/"
              text='1 Day to go for Amalthea 22.'
              label='Amalthea 22'
              path='/instagram'
            />
            <CardItem
              instagramUrl="https://www.instagram.com/reel/CwuOXzIuXG7/"
              text='I am really proud of the last animation.'
              label='Amalthea 23'
              path='/instagram'
            />
            <CardItem
              instagramUrl="https://www.instagram.com/reel/CxnxLPbuGgS/"
              text='Theme Release Amalthea 23.'
              label='Amalthea 23'
              path='/instagram'
            />
            <CardItem
              instagramUrl="https://www.instagram.com/reel/Ctb4xtOrL6T/"
              text='Tech Tuesday Amalthea 23.'
              label='Amalthea 23'
              path='/instagram'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
