import React, { useState } from 'react';
import { formatearNumero } from '../components/helpers/format';
import { useCart } from '../components/context/CartContext';

const Pagar = () => {
  const { total } = useCart();

  return (
    <div className='metodoPago'>
        <div className="pago">
          <h5 className='montoPagar'>${formatearNumero(total)}</h5>
        </div>
    </div>
  );
};

export default Pagar;