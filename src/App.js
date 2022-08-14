import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart'
import CartContext from './context/CartContext';
import Orders from './components/Orders';
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
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryName" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/Orders" element={<Orders />}/>
        </Routes>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
