import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js';


function App() {
  return (
    <div className="App">
      <h1 className='titulo'>ESTAS SON RESEÑAS DE VARIOS PROFESIONALES!</h1>
      <Testimonio
        nombre= 'SANTIAGO'
        cargo= 'Ingenieria de sistemas'
        testimonio= 'John Doe (masculine) and Jane Doe (feminine) are multiple-use placeholder names that are used in the United States when the true name of a person is unknown or is being intentionally concealed.'
        imagen= 'ema.jpeg'
      />

      <Testimonio
        nombre= 'SANTIAGO'
        cargo= 'Ingenieria de sistemas'
        testimonio= 'John Doe (masculine) and Jane Doe (feminine) are multiple-use placeholder names that are used in the United States when the true name of a person is unknown or is being intentionally concealed.'
        imagen= 'ema.jpeg'
      />
    </div>
  );
}

export default App;
