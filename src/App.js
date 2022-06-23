//import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App box-border p-4">
      <NavBar/>
      <ItemListContainer mensaje="En un futuro me desarrollaré y seré de utilidad" />
    </div>
  );
}

export default App;
