import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Recent Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/cardcover1.png'
              text='AD1TYA - Talabgaar (Prod. by Raval) I Official Music Video'
              path='https://www.youtube.com/watch?v=UB0StZN6Eb4'
              
            />
            <CardItem
              src='images/cardcover2.png'
              text='AD1TYA - Amdavad No Chokro (Prod. by Jerry Martin) I Official Music Video'
              
              path='https://www.youtube.com/watch?v=Vt6Nr2q-uoM'
            />
            <CardItem
              src='images/cardcover3.png'
              text='AD1TYA - Rawaiya (Prod. by Alex) I Official Music Video'
              
              path='https://www.youtube.com/watch?v=g0a12HfQ6Lo'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;