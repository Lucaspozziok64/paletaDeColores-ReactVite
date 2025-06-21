import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColor from "./components/FormularioColor";
import "bootstrap-icons/font/bootstrap-icons.css";
import CardColor from "./components/CardColor";

function App() {
  return (
    <main className="container my-5">
      <section className="container bg-secondary rounded-4">
        <FormularioColor />
      </section>
        <div className="container-fluid my-3 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        <CardColor />
        <CardColor />
      </div>
    </main>
  );
}

export default App;
