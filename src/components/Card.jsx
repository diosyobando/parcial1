import React from 'react'

const Card = ({name, address, age }) => {
  return <div>
      <h3>Nombre: {name}</h3>
      <h3>Direccion: {address}</h3>
      <h3>Edad: {age} años</h3>
  </div>
};

export default Card;