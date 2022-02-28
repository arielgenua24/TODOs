import React from 'react'
import {TodoCounter} from './TodoCounter'
import { TodoList } from './TodoList'
import {TodoItem} from './TodoItem'
import { TodoSearch } from './TodoSearch'
import { CreateTodoButton } from './CreateTodoButton'

/*Que puedan embeber la imagen del juego con un link y que quede guardad con el localStorage, Si es un juego de nintendo,que el fondo cambie a blanco y rojo, si es xbox verde y negro, si es play blanco y azul. Las tarjetas se basaran en un TODOs play, imagen del juego, titulo del juego, por que lo queres jugar, puntuacion y opinion despues de jugarlo  */

const defaultTodos = [
  {text: 'The Last Of us', image:'', compañia:'Playstation' ,completed: false},
  {text: 'Cyberpunk', image:'', compañia:'' ,completed: false},
  {text: 'Zelda breath of the wild', image:'', compañia:'' ,completed: false},
  {text: 'Zelda okarine of time', image:'', compañia:'' ,completed: false},
]

function App(){
    const [todos, setTodos] = React.useState(defaultTodos)
    const [searchValue, setSearchValue] = React.useState('')
    let searchedTodos = []


    if(!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.map(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
    }

    

    const completedTodos = (text) => {
     const completedTodo = searchedTodos.findIndex(todo => {
       return todo.text === text
     }) //5
     const newTodos = [...searchedTodos]
     console.log('viejo todo' + newTodos)
     newTodos.splice(completedTodo,1)
     console.log('nuevo todo' + newTodos)
     setTodos(newTodos);
     alert('aqui completamos ')

    }



  return(
    <>

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />


      <TodoCounter
        todos={searchedTodos.length}
        
      />



      <TodoList>  
        {searchedTodos.map(todo =>(
          <TodoItem
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={() => completedTodos(todo.text)}
          
          
          />
        ))}

      </TodoList>


      <CreateTodoButton />


    </>
  );
}

export {App};