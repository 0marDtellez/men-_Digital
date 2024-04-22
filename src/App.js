import {  Routes,Route } from 'react-router-dom';
import { CartProvider } from './Screen/context/carritoContext';
import Nave from './Screen/nave/navegar';
import Cart from './Screen/context/Carro';
import Platos from './Screen/menu/menu';
import Info from './Screen/menu/InfoMen/prod';
import Detalles from './Screen/context/detalle';
import NveAd from './Screen/nave/naveAd';
import InfoCart from './Screen/context/infocar';
import ChechAut from './Screen/context/chechAut';
import Inicio from './Screen/menu/inde'
import Crear from './Screen/CRUD/Crear/crear'
import Editar from './Screen/CRUD/ed/editar'
import Login from './Screen/login/logPrin';
import SingUp from './Screen/login/singUp';
import AuthDetails from './Screen/login/AuthDetails';
import VerMen from './Screen/CRUD/ver/peins';
import MosProd from './Screen/cosina/MosProd';
import FormularioDinamico from './Screen/CRUD/Crear/formPrue2';
import Postre from './Screen/CRUD/Crear/crePost';
import Bebida from './Screen/CRUD/Crear/creBebi';
import Entradas from './Screen/CRUD/Crear/creEntra';
import Entrada from './Screen/menu/navMen/entrada';
import PlatoPrins from './Screen/menu/navMen/platoPrins';
import Postres from './Screen/menu/navMen/postre';
import Bebidas from './Screen/menu/navMen/bebida';
import EdiEntrada from './Screen/CRUD/ed/edEntrada';
import EdiPostre from './Screen/CRUD/ed/edPostre';
import EdiBebida from './Screen/CRUD/ed/edBebidas';
import InfoMenu from './Screen/menu/InfoMen/infMen';
import InfoPostr from './Screen/menu/InfoMen/infPost';
import InfoBebi from './Screen/menu/InfoMen/infoBrbi';

function App() {
  return(
  <div>
    <CartProvider> 
      <Routes>
      <Route path='/' element= {<Inicio />}/>
        <Route path="/carro" element={<Cart />}/>
        <Route path='/check' element={<ChechAut />}/>
        <Route path="/" element={<Nave />}>
          <Route path='/platos' element= {<Platos />}/>
          <Route path='/Entrada' element= {<Entrada />}/>
          <Route path='/PlatoPrins' element= {<PlatoPrins />}/>
          <Route path='/Postre' element= {<Postres />}/>
          <Route path='/Bebida' element= {<Bebidas />}/>
          <Route path='/infoCar' element={<InfoCart />}/>
          <Route path='/info/:id' element={<Info />}/>
          <Route path='/InfoPrinsi/:id' element={<InfoMenu />}/>
          <Route path='/InfoPostre/:id' element={<InfoPostr />}/>
          <Route path='/InfoBebida/:id' element={<InfoBebi />}/>
          <Route path='/detalles' element={<Detalles />}/>
          <Route path="/login" element={<Login />}/>
        </Route>
        <Route path='/' element={<NveAd />}>
          {/* /Plato prinsipal/ */}
          <Route path="/CrearPlatoPrins" element={<Crear />} />
          <Route path="/editar/:id" element={<Editar />}/>
          {/* /Entrada/ */}
          <Route path="/CrearEntrada" element={<Entradas />} />
          <Route path="/EditarEntrada/:id" element={<EdiEntrada />} />
          {/* /Postre/ */}
          <Route path='/CrearPostre' element={<Postre />} />
          <Route path="/EditarPostre/:id" element={<EdiPostre />} />
          {/* /Bebida/ */}
          <Route path='/CrearBebida' element={<Bebida />} />
          <Route path="/editarBebida/:id" element={<EdiBebida />}/>
          {/* // */}
          <Route path='/SingUp' element={<SingUp />}/>
          <Route path='/AuthDetails' element={<AuthDetails />}/>
          <Route path='/VerMen' element={<VerMen />}/>
          <Route path='/Pedidos' element={<MosProd />}/>
          <Route path='/formPrueba' element={<FormularioDinamico/>}/>
        </Route>
      </Routes>
    </CartProvider>
  </div>
  )
}

export default App;
