import React,{useContext} from "react";
import {jsPDF} from "jspdf";
import { CartContext } from "../../context/carritoContext";

const Factura = () =>{
const {carrito,preTotal } = useContext(CartContext);
const generarPDF =()=>{
    const doc = new jsPDF();
    doc.text(`Baratie`)
    doc.text(`Baratie cll 19 # 34 A 2`)
    doc.text(`fecha`)
    doc.text(`Nombre Cliente`)
    doc.text(`Mesa del pedido`)
    {carrito.map((item) => (
    doc.text(`Producto: ${item.Nombre}`,10, 50),
    doc.text(`Precio: ${item.Precio}`,10, 60),
    doc.text(`Total:${preTotal()}`)
    ))}
    doc.save(`factura_${carrito.id}.pdf`)
}
 return (
    <>
    <div>
        <h1>Factura</h1>
    {/* {cliente.map((item) => (
        <div key={item.id}>
            <h2 class="card-title">Nombre: {item.nombre}</h2>
            <p class="card-text">Fecha: {item.Fecha}</p>
            <p class="card-text">Mesa: {item.mesa}</p>
            <p class="card-text">Telefono: {item.telefono}</p>
        </div>
    ))}    */}
    {carrito.map((item) => (
        <div key={item.id}>
            <h2 class="card-title">Nombre: {item.Nombre}</h2>
            <p class="card-text">precio: {item.Precio}</p>
        </div>
    ))}
    <p className="card-text">Total {preTotal()}</p>
    </div>
    <div>
        <button onClick={generarPDF}>factura</button>
    </div>
    </>
 )
}
export default Factura;