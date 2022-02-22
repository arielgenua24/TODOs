import React from 'react'
import {TodoCounter} from './TodoCounter'
import { TodoList } from './TodoList'
import {TodoItem} from './TodoItem'
import { TodoSearch } from './TodoSearch'
import { CreateTodoButton } from './CreateTodoButton'

/*Que puedan embeber la imagen del juego con un link y que quede guardad con el localStorage, Si es un juego de nintendo,que el fondo cambie a blanco y rojo, si es xbox verde y negro, si es play blanco y azul. Las tarjetas se basaran en un TODOs play, imagen del juego, titulo del juego, por que lo queres jugar, puntuacion y opinion despues de jugarlo  */

const todos = [
  {text: 'The Last Of us', image:'', compañia:'Playstation' ,completed: false},
  {text: 'The Last Of us', image:'', compañia:'' ,completed: false},
  {text: 'The Last Of us', image:'', compañia:'' ,completed: false},
  {text: 'The Last Of us', image:'', compañia:'' ,completed: false},
]

function App(){
  return(
    <>

      <TodoSearch/>
      <TodoCounter/>

      <TodoList>  
        {todos.map(todo =>(
          <TodoItem  
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}/>
        ))}

      </TodoList>


      <CreateTodoButton />
    </>
  );
}

export {App};