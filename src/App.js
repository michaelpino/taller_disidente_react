//import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import CartContext from './context/CartContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer mensaje="En un futuro me desarrollaré y seré de utilidad" />}/>
          <Route path="/category/:categoryName" element={<ItemListContainer mensaje="En un futuro me desarrollaré y seré de utilidad" />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
