
import './App.css';
import Container from './Components/Container';



function App() {
  return (
    <div className=" container ">
        <h1 className='text-center m-5'>Lista de Tareas</h1>
        <h3 className='text-center m-5'>Para marcar una tarea como completada, hacer click sobre la misma</h3>
        <Container/>
    
    </div>
  );
}

export default App;
