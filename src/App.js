
import './App.css';
import calculadoraLogo from'./imagenes/calculadora-logo.png'
import Boton from './componentes/boton'
import Pantalla from './componentes/pantalla'
import BotonClear from './componentes/botonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState(''); //estado de la pantalla

  const agregarInput = val => { 
    setInput(input + val);
  };

  const calcularResultado = () => {
    try {
      if (input) {
        setInput(evaluate(input));
        console.log(typeof setInput);
      } else {
        alert('Ingresa los valores');
      }
    } catch (error) {
      setInput('Syntax Error');
    }
  };

  // const calcularResultado = () => {
  //   try {
  //     if (input) {
  //       const resultado = evaluate(input);
  //       const MAX_LENGTH = 10;
  //       setInput(resultado.length > MAX_LENGTH ? resultado.substring(0, MAX_LENGTH) + '...' : resultado);
  //       console.log(setInput);
  //     } else {
  //       alert('Ingresa los valores');
  //     }
  //   } catch (error) {
  //     setInput('Syntax Error');
  //   }
  // };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={calculadoraLogo}
          alt='Logo'
        />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div> 
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>


   
      </div>
    </div>


    
  );
}

export default App;
