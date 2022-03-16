import React from "react";
import { useLocalStorage } from "./UseLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        parsedItem
    } = useLocalStorage('TODOS_V1.2', []);

    console.log(parsedItem)
    const [openModal,setOpenModal] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')
    let searchedTodos = []


    if(!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos?.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
        })
        console.log(searchedTodos)
    }

    const addTodos = (text,interest,image,opinion,category) => {
        //nos mandaran titulo, categoria, imagen, descricpcion,
        //son 4 categorias
        const newTodos = [...todos]
        newTodos.push({
            text,
            interest,
            image,
            opinion,
            category
        })
        saveTodos(newTodos)

       /*
        completed: false,
            text
       
       newTodos.push({text: titulo,category: categoria,image: imagen,description: descripcion})
        saveTodos(newTodos) */
    }


   const completedTodos = (text) => {
    const completedTodo = searchedTodos.findIndex(todo => {
    return todo.text === text
    }) //5
    const newTodos = [...searchedTodos]
    console.log('viejo todo' + newTodos)
    newTodos.splice(completedTodo,1)
    saveTodos(newTodos);
    }

    return(
        <TodoContext.Provider value={{
            completedTodos,
            searchedTodos,
            todos,
            searchValue,
            setSearchValue,
            openModal,
            setOpenModal,
            addTodos
        }}>
            {props.children}

        </TodoContext.Provider>
    )


}

export {TodoContext, TodoProvider}
