import React, { useContext,useState } from 'react';
import ItemCount from './itemCount';
import { CartContext } from './carritoContext';
import Agre from './agregar';
import { Link } from 'react-router-dom';
import '../css/stilo.css'

const Cart = () => {
    const [ ingredi1,setIngredi1] = useState(1);
    const handleRestardi1 = () => {
      ingredi1 > 0 && setIngredi1(ingredi1 - 1)
  }
  const handleSumardi1 = () => {
      ingredi1 < 5 && setIngredi1(ingredi1 + 1)
  }
    const [ ingredi2,setIngredi2] = useState(1);
    const handleRestardi2 = () => {
      ingredi2 > 0 && setIngredi2(ingredi2 - 1)
  }
  const handleSumardi2 = () => {
      ingredi2 < 5 && setIngredi2(ingredi2 + 1)
  }
    const [ ingredi3,setIngredi3] = useState(1);
    const handleRestardi3 = () => {
      ingredi3 > 0 && setIngredi3(ingredi3 - 1)
  }
  const handleSumardi3 = () => {
      ingredi3 < 5 && setIngredi3(ingredi3 + 1)
  }
    const [ ingredi4,setIngredi4] = useState(1);
    const handleRestardi4 = () => {
      ingredi4 > 0 && setIngredi4(ingredi4 - 1)
  }
  const handleSumardi4 = () => {
      ingredi4 < 5 && setIngredi4(ingredi4 + 1)
  }
    const [ ingredi5,setIngredi5] = useState(1);
    const handleRestardi5 = () => {
      ingredi5 > 0 && setIngredi5(ingredi5 - 1)
  }
  const handleSumardi5 = () => {
      ingredi5 < 5 && setIngredi5(ingredi5 + 1)
  }
    const [ ingredi6,setIngredi6] = useState(1);
    const handleRestardi6 = () => {
      ingredi6 > 0 && setIngredi6(ingredi6 - 1)
  }
  const handleSumardi6 = () => {
      ingredi6 < 5 && setIngredi6(ingredi6 + 1)
  }
    const [ ingredi7,setIngredi7] = useState(1);
    const handleRestardi7 = () => {
      ingredi7 > 0 && setIngredi7(ingredi7 - 1)
  }
  const handleSumardi7 = () => {
      ingredi7 < 5 && setIngredi7(ingredi7 + 1)
  }
  const {carrito,preTotal,vaciaCarri,agreProdCarr } = useContext(CartContext);
  const handleVaciar=()=>{
    vaciaCarri();
  }
  return (
    <>
    <div className='card'>
      <div>
        <h2>Carrito de Compras</h2>
        <div>
          {
            carrito.length > 0 ?
              <>
                <h2>precio total:{preTotal()}</h2>
                <button className="btn" onClick={handleVaciar}>vaciar Carrito</button>
                <Link className="btn" to='/check'>finalizar Compra</Link>
              </>:
            <h1>No has escojido nungun producto.</h1>
          }
          <li className="nav-item">
              <Link className="btn" aria-current="page" to="/platos">Menu</Link>
          </li>
        </div>
      </div>
      <div className="container">
        <div className="tamaño">
            <div className="row gx-5">
                <div className="box">
                    {carrito.map((menu) => (
                    <div className="card" key={menu.id}>
                    <img src={`${menu.imagen}`} className="tama" alt="..."/>
                    <div className="card-body">
                      <table class="table">
                        <thead>
                          <tr>
                            <td >
                              <p className="card-text">
                                {menu.ingre1}
                                <ItemCount
                                cantidad={ingredi1}
                                handleSumar={handleSumardi1}
                                handleRestar={handleRestardi1}
                              />
                              </p>
                            </td>
                            <td >
                              <p className="card-text">
                                {menu.ingre2}
                                <ItemCount
                                cantidad={ingredi2}
                                handleSumar={handleSumardi2}
                                handleRestar={handleRestardi2}
                              />
                              </p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td >
                              <p className="card-text">
                                {menu.ingre3}
                                <ItemCount
                                cantidad={ingredi3}
                                handleSumar={handleSumardi3}
                                handleRestar={handleRestardi3}
                              />
                              </p>
                            </td>
                            <td >
                              <p className="card-text">
                                {menu.ingre4}
                                <ItemCount
                                cantidad={ingredi4}
                                handleSumar={handleSumardi4}
                                handleRestar={handleRestardi4}
                              />
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td >
                              <p className="card-text">
                                {menu.ingre5}
                                <ItemCount
                                cantidad={ingredi5}
                                handleSumar={handleSumardi5}
                                handleRestar={handleRestardi5}
                              />
                              </p>
                            </td>
                            <td>
                              <p>
                                {menu.ingre6}
                                <ItemCount
                                cantidad={ingredi6}
                                handleSumar={handleSumardi6}
                                handleRestar={handleRestardi6}
                              />
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>
                                {menu.ingre7}
                                <ItemCount
                                cantidad={ingredi7}
                                handleSumar={handleSumardi7}
                                handleRestar={handleRestardi7}
                              />
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="card-text">precio unidad = ${menu.Precio}</p>
                      <p className="card-text">precio total = ${preTotal()}</p>
                      {/* <p className='card-text'>cantidad: {menu.cantidad} </p> */}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;