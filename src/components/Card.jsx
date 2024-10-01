import React from 'react';
import { formatearNumero } from '../components/helpers/format.jsx';
import { Link } from 'react-router-dom';
import { useApi } from '../components/context/ApiContext.jsx';

const Card = ({ id, name, img, ingredients, price, agregarAlCarro }) => {

  const {capPrimeraLetra} = useApi()


  return (
    <div className='col'>
      <figure className="card">
        <div className="img">
          <img src={img} className="card-img-top" alt={name} />
        </div>
        <figcaption className="cuerpo">
        
              <h5 className="titulo">{name}</h5>
              <hr />
              <p>Ingredientes</p>
              <ul className="ingredientes">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{capPrimeraLetra(ingredient)}</li>
                ))}
              </ul>
              <div className="container">
                <div className="botones">
  
                <Link to={`/pizza/${id}`} key={id} className="more btn">
                    Ver Más
                </Link>

                  <a className="btn add" 
                  data-bs-toggle="offcanvas" 
                  href="#offcanvasExample" 
                  role="button" aria-controls="offcanvasExample" 
                  onClick={agregarAlCarro}>
                       Añadir <i className="fa-solid fa-cart-shopping"></i>
                 </a>
  
                  <h5 className="precio">Precio ${formatearNumero(price)}</h5>
                </div>
              </div>
        </figcaption>
      </figure>
    </div>
  );
  };


export default Card;