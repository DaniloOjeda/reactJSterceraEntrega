
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contacto from "./pages/Contacto";
import NavBar from "./components/NavBar/Navbar"; 
import { CartContextProvider } from './storage/cartContext';

import CartContainer from "./components/CartContainer/CartContainer";
import { getItems } from './services/firebase';
import Gracias from './components/Gracias/Gracias';



function App() {
  getItems();
return (
  <CartContextProvider value={ {cart: []} }>
      <BrowserRouter>
      <NavBar
       onNavigate={(ruta) => console.log("Estas navegando a la ruta", ruta)}/>

       <Routes>
         <Route path="/" element={<ItemListContainer />}  />
         <Route path= "/category/:categoryID" element={<ItemListContainer />}  />
         <Route path="/item/:itemID" element={<ItemDetailContainer />}  />
         <Route path="/contacto/" element={<Contacto />}  />
        
         <Route path="/cart" element={<CartContainer/>}  />
         <Route path="/Gracias/:orderID" element={<Gracias />}  />
         <Route path="*" element={<h1>404: Recurso no encontrado</h1>}  />
       </Routes>
       
       </BrowserRouter>
       
  </CartContextProvider>
       
  );
}

export default App;
