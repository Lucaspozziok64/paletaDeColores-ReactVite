import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormularioColor from './components/FormularioColor'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <main className='container my-5'>
      <section className='container bg-secondary rounded-4'>
        <FormularioColor />
      </section>
    </main>
  )
}

export default App
