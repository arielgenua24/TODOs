import React from 'react'
import {AppUI} from './AppUI'
import { TodoProvider } from '../TodoContext';


/*Que puedan embeber la imagen del juego con un link y que quede guardad con el localStorage, Si es un juego de nintendo,que el fondo cambie a blanco y rojo, si es xbox verde y negro, si es play blanco y azul. Las tarjetas se basaran en un TODOs play, imagen del juego, titulo del juego, por que lo queres jugar, puntuacion y opinion despues de jugarlo  */

const defaultTodos = [
  {text: 'The Last Of us', image:'', compañia:'Playstation' ,completed: false},
  {text: 'Cyberpunk', image:'', compañia:'' ,completed: false},
  {text: 'Zelda breath of the wild', image:'', compañia:'' ,completed: false},
  {text: 'Zelda okarine of time', image:'', compañia:'' ,completed: false},
]


function App(){
      
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
      
  );
}

export {App};