import React from 'react';
import imagenFondo from '../assets/img/header.jpeg'

const Header = () => {
  return (
    <header
      style={{
        padding: "50px",
        backgroundImage: "url(" + imagenFondo + ")",
        marginTop: "15px"
      }}
    >
      <p class="text-white text-center fs-1 ">¡Pizzería Mamma Mia!</p>
      <p class="text-white text-center fs-6">¡Las mejores pizzas italianas!</p>
    </header>
  );
};

export default Header;