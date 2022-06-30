import logo from './logo.svg';
import './App.css';
import Tarjeta from './Tarjeta';

function App() {
  return (
    <div className="App">
      <h1>Hola clase cómo están?</h1>
      <p>Descripción</p>
      <Tarjeta nombreTarjeta={"Información Random"} descripcion={"descripcion padre"} precio={2500} />
      <Tarjeta nombreTarjeta={"Cartago Campeón"} />
    </div>
  );
}

export default App;
