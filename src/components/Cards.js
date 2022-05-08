import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Destination</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Call it a night with barbeque under the stars.'
              label='Barbeque'
            />
            <CardItem
              src='images/img11.jpg'
              text='A dip in these cool waters is pure bliss.'
              label='Pool'
            />
            <CardItem
              src='images/img10.jpg'
              text='Wake up with the view of the fresh blooms from your window.'
              label='Sunrise'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img-4.jpg'
              text='We will make sure you eat to your hearts content.'
              label='Meal'
            />
          <CardItem
              src='images/img-2.jpg'
              text='Unbridled views of Amba valley from an destination.'
              label='Amba Ghat'
            />
            <CardItem
              src='images/img-3.jpg'
              text='How about a camping with your gang?'
              label='Camping'
            />           
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;