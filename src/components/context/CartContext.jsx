import { createContext, useContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

const agregarAlCarro = (pizza) => {
      const existingItem = cartItems.find(item => item.id === pizza.id);
      if (existingItem) {
        setCartItems(cartItems.map(item => 
          item.id === pizza.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ));
      } else {
        setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
      }
    };
  
    const eliminarDelCarro = (id) => {
      const existingItem = cartItems.find(item => item.id === id);
      if (existingItem.quantity === 1) {
          setCartItems(cartItems.filter(item => item.id !== id));
      } else {
          setCartItems(cartItems.map(item =>
              item.id === id 
              ? { ...item, quantity: item.quantity - 1 } 
              : item
          ));
      }
  };

const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <CartContext.Provider value={{ cartItems, agregarAlCarro, eliminarDelCarro, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;