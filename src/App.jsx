import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
//import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pizza from "./pages/Pizza";
import Footer from "./components/Footer";
import "./App.css";
import NotFound from "./pages/NotFound";
import Pagar from "./pages/Pagar";
import Cart from "./components/Cart";
import ApiProvider from "./components/context/ApiContext";
import { useCart } from "./components/context/CartContext";
import Profile from "./pages/Profile";
import UserProvider from "./components/context/UserContext";

function App() {
  const { cartItems, agregarAlCarro, eliminarDelCarro } = useCart();

  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <ApiProvider>
            <Navbar />
              <Cart cartItems={cartItems} agregarAlCarro={agregarAlCarro} eliminarDelCarro={eliminarDelCarro} />
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Register" element={<Register></Register>}></Route>
                <Route path="/Login" element={<Login></Login>}></Route>
                <Route path="/pizza/:id" element={<Pizza></Pizza>}></Route>
                <Route path="/Cart" element={<Cart></Cart>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
                <Route path="/Pagar" element={<Pagar></Pagar>}></Route>
                <Route path="/Perfil" element={<Profile></Profile>}></Route>
              </Routes>
            <Footer />
          </ApiProvider>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;