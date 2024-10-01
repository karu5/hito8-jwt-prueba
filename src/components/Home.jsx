import React from "react";
import CardPizza from "./Card";
import Header from "./Header";
import { useCart } from "./context/CartContext";
import { useApi } from "./context/ApiContext";


function Home() {
  const {pizzas, capPrimeraLetra} = useApi()
  const {agregarAlCarro} = useCart();

  

  return (
    <div>
      <Header></Header>

      <main className="d-flex justify-content-center gap-3 mt-3 mb-3">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={capPrimeraLetra(pizza.name)}
            price={pizza.price}
            ingredients={pizza.ingredients}
            desc={pizza.desc}
            img={pizza.img}
            agregarAlCarro={() => agregarAlCarro(pizza)}
          />
        ))}
      </main>
    </div>
  );
}

export default Home;