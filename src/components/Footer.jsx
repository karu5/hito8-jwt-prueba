import React from "react";

function Footer() {
  const estilos = {
      color: "white",
      backgroundColor: "black",
      padding: "20px"
  };

  return (
<footer className="text-center my-5 text-secondary">
  
  <p style={estilos}>
      {""}
     ©2024 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
</footer>
  )
}

export default Footer; 
