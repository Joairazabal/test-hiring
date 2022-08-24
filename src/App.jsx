import './App.css';
import {Link} from 'react-router-dom'
import Table from './components/Table'
import Form from './components/Form'

function App() {
  return (
    <div className='App__container' >
    <button >
      <Link to='/table' className='text-decoration-none text-reset'>Primer Ruta</Link>
      </button>
     <button ><Link to='/form' className='text-decoration-none text-reset'>Segunda Ruta</Link></button>
    </div>
  );
}

export default App;
