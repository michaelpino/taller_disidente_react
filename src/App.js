//import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App box-border p-4">
      <NavBar/>
      <ItemListContainer mensaje="En un futuro me desarrollaré y seré de utilidad" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
