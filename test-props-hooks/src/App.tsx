
import Contador from './paginas/contador/Contador';
import Home from './paginas/home/Home'

function App() {

  return (
    <>
      <Home titulo="Esse é um componente com props" 
      texto="Agora já estamos trabalhando com props - componente chamado com sucesso"/>


      <Contador />  
      
    </>

    
  )
}

export default App;
