import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColor from "./components/FormularioColor";
import "bootstrap-icons/font/bootstrap-icons.css";
import CardColor from "./components/CardColor";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function App() {
  const coloresGuardados = JSON.parse(localStorage.getItem('agendaColores')) || []
  const [colores, setColores] = useState(coloresGuardados);

  useEffect(()=> {
    localStorage.setItem('agendaColores', JSON.stringify(colores))
  }, [colores])

  const agregarColor = (nuevoColor) => {
    const nuevo = { id: Date.now(), nombre: nuevoColor };
    setColores([...colores, nuevo]);
  };

  const borrarCard = (id) => {
    setColores(colores.filter((color) => color.id !== id));
    Swal.fire({
      title: "Color Borrado!",
      text: "Has elminado la tarjeta!",
      icon: "success",
    });
  };

  return (
    <>
      <main className="container my-5">
        <section className="container bg-secondary rounded-4 contenedorForm">
          <FormularioColor agregarColor={agregarColor} />
        </section>
        <div className="container-fluid my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {colores.map((color) => (
            <CardColor
              key={color.id}
              color={color}
              borrarCard={() => borrarCard(color.id)}
            />
          ))}
        </div>
      </main>
      <footer className="bg-dark text-center text-white p-1">
        <p className="mb-0">
          Desarrollado por{" "}
          <a href="https://github.com/Lucaspozziok64">Lucas Figueroa</a>👨‍💻
        </p>
        <p className="mb-0">&copy;Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
