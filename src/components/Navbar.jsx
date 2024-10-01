import React from 'react';
import { formatearNumero } from './helpers/format';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/context/CartContext';
import { UserContext } from '../components/context/UserContext';

const Navbar = () => {
    const { total } = useCart(CartContext);
    const { user, Login, Logout } = UserContext();
    const navigate = useNavigate();
  
    const manejoCarrito = () => {
      const offcanvasElement = document.getElementById('offcanvasExample');
      const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
      offcanvas.show();
    };

    const setActiveClass = ({isActive}) => isActive ? `active` : `notActive`;
    const Salir = () => {
        Logout();
        navigate("/"); 
    }; 
    

    return (
    <div>

        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">

            <Link to="/" className="navbar-brand text-light">

            <i className="fa-solid fa-pizza-slice"></i> Pizzeria Mamma Mia!</Link>

            <button className="navbar-toggler text-warning" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">           
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

            {user ? (
                <li className="nav-item">
                    <Link to="/Perfil" className="btn btn-outline-warning" role="button">Perfil</Link>
                </li>
            ) : (
                <>
                <li className="nav-item">
                    <Link to="/Login" className="btn btn-outline-warning" role="button">Ingresar</Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/Register" className="btn btn-outline-warning">Registrarse</Link>
                </li>
                </>
            )}
                
            </ul>

            <div className="d-flex gap-5">
                {user ? (
                    <button onClick={Salir} className='btn btn-outline-warning'>
                        Logout
                    </button>
                ) : (
                    <button onClick={Login} className='btn btn-outline-danger'>
                        Login
                    </button>
                )}


                <button type='button' className='btn btn-outline-warning' onClick={manejoCarrito} aria-label='Abrir carro de compras'>
                
                <i className="fa-solid fa-cart-shopping"></i>
                 Total: ${formatearNumero(total)}
                 </button>
            </div>
           </div>
        </div>
        </nav>  
    </div>
  );
};

export default Navbar;