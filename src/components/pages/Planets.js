import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Planets() {
  return (
      
     

    <div className='cards'>
    
      <h1>Mira los 8 planetas del sistema solar </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/mercurio.jpg'
              text='Mercurio es uno de los cuatro planetas rocosos o sólidos; es decir, tiene un cuerpo rocoso, como la Tierra.'
              label='Mercurio'
              path='/planets'
            />
            <CardItem
              src='images/venus.jpg'
              text='Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte.'
              label='Venus'
              path='/planets'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tierra.jpg'
              text=''
              label='Tierra'
              path='/planets'
            />
            <CardItem
              src='images/marte.jpg'
              text=''
              label='Marte'
              path='/planets'
            />
            <CardItem
              src='images/jupiter.jpg'
              text=''
              label='Jupiter'
              path='/planets'
            />
            <CardItem
              src='images/saturno.jpg'
              text=''
              label='Saturno'
              path='/planets'
            />
            <CardItem
              src='images/urano.jpg'
              text=''
              label='Urano'
              path='/planets'
            />
            <CardItem
              src='images/neptuno.jpg'
              text=''
              label='Neptuno'
              path='/planets'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Planets;