import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

export default function Planets() {
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
              text='La tierra es el único planeta que alberga vida en todo el Sistema Solar.'
              label='Tierra'
              path='/planets'
            />
            <CardItem
              src='images/marte.jpg'
              text='Marte es un planeta telúrico con una atmósfera delgada de dióxido de carbono.'
              label='Marte'
              path='/planets'
            />
            </ul>

            <ul className='cards__items'>
            <CardItem
              src='images/jupiter.jpg'
              text='Jupiter es un gigante gaseoso que forma parte de los denominados planetas exteriores'
              label='Jupiter'
              path='/planets'
            />
            <CardItem
              src='images/saturno.jpg'
              text='Saturno es el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra'
              label='Saturno'
              path='/planets'
            />
            </ul>

            <ul className='cards__items'>
            <CardItem
              src='images/urano.jpg'
              text=' Se llama así en honor de la divinidad griega del cielo Urano, el padre de Crono y el abuelo de Zeus.'
              label='Urano'
              path='/planets'
            />
            <CardItem
              src='images/neptuno.jpg'
              text='Es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas. '
              label='Neptuno'
              path='/planets'
            />
            </ul>
          
        </div>
      </div>
    </div>
  );
}

