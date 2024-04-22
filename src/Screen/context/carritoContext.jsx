import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const carIni = localStorage.getItem("carrito")? JSON.parse(localStorage.getItem("carrito")) : [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carIni);

  // carro de compras
  const agreProdCarr = (item, cantidad) => {
    const itemAgregar = {...item, cantidad };
    const seEncuentra = carrito.find((producto) => producto.id === itemAgregar.id);
    if (seEncuentra) {
      seEncuentra.cantidad += cantidad;
    } else {
      setCarrito((prevCarrito) => [...prevCarrito, itemAgregar]);
    }
  };
  const addComment = (id, comment) => {
    setCarrito(carrito.map(item => item.id === id? {...item, comments: comment} : item));
  };
  const removeItem = (id) => {
    setCarrito(carrito.filter(item => item.id!== id));
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  // cantidad
  const cantiCarri = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  // precio total
  const preTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.Precio * prod.cantidad, 0);
  };

  const vaciaCarri = () => {
    setCarrito([]);
  };
  useEffect(() => {
    if (carrito.length > 0) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }, [carrito]);
  return (
    <CartContext.Provider value={{ carrito, agreProdCarr, cantiCarri, preTotal, vaciaCarri,removeItem,addComment }}>
      {children}
    </CartContext.Provider>
  );
};