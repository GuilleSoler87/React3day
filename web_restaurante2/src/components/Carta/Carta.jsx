import React from 'react';
import './Carta.css';
import Pizza from '../../assets/Pizza.jpg';
import Hamburguesa from '../../assets/hamburguesa.jpg';
import ArrozCubana from '../../assets/ArrozCubana.jpg';

function Carta(props) {
  const dishes = props.dishes;
  const imgs = [
    { id: 1, img: ArrozCubana },
    { id: 2, img: Hamburguesa },
    { id: 3, img: Pizza }
  ];
  const dishesWithImgs = dishes.map(item1 => {
    const item2 = imgs.find(item2 => item2.id === item1.id);
    return { ...item1, img: item2.img };
  });

  return (
    <div className="home-container">
      <div className="title-container">
        <h2 className="title">Platos disponibles</h2>
      </div>
      <div className="list-container">
        <ul className="list">
          {dishesWithImgs.map((dish) => {
            const imgPath = '../../assets/' + dish?.img;
            console.log(imgPath);
            return (
              <li className="li-home" key={dish.id}>
                <h3 className='dishName'>{dish.name}</h3>
                <img src={dish.img} alt="" />
                <p className='descDish'>{dish.description}</p>
                <p className='priceDish'>Precio: {dish.price} €</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Carta;
