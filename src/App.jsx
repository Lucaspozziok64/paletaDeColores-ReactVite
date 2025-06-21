import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColor from "./components/FormularioColor";
import "bootstrap-icons/font/bootstrap-icons.css";
import CardColor from "./components/CardColor";
import { useState } from "react";

function App() {

  const [colores, setColores] = useState([]);

  const agregarColor = (nuevoColor) => {
    const nuevo = {id: Date.now(), nombre: nuevoColor}
    setColores([...colores, nuevo])
  }

  const borrarCard = (id) => {
    setColores(colores.filter(color => color.id !== id));
  }

  return (
    <main className="container my-5">
      <section className="container bg-secondary rounded-4">
        <FormularioColor agregarColor={agregarColor} />
      </section>
        <div className="container-fluid my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {colores.map((color)=> 
          <CardColor
            key={color.id} 
            color={color} 
            borrarCard={()=> borrarCard(color.id)}
          />)}
      </div>
    </main>
  );
}

export default App;
