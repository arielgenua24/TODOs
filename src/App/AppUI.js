import React from 'react';
import {TodoCounter} from '../TodoCounter';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext'
import {TodoForm} from '../todoForm'
import {LastTodo} from '../LastTodo'
import {Modal} from '../modal'


function AppUI() {
    
    const {
        completedTodos,
        searchedTodos,
        todos,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)


    let LastElement = searchedTodos.length - 1;
    let showLastTodo = searchedTodos[LastElement]
    console.log(showLastTodo)

    

    return (
    <>
        <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}
        />

        <TodoList>     
            {searchedTodos?.map(todo => (
            <TodoItem
                interest={todo.interest}
                image={todo.image}
                key={todo.text}
                text={todo.text}
                opinion={todo.opinion}
                completed={todo.completed}
                onComplete={() => completedTodos(todo.text)}
            />
            ))}
        </TodoList>

       
        <LastTodo
            category = {showLastTodo.category}
            interest={showLastTodo.interest}
            image={showLastTodo.image}
            key={showLastTodo.text}
            text={showLastTodo.text}
            opinion={showLastTodo.opinion}
            onComplete={() => completedTodos(showLastTodo.text)}
        />
        
       
       

        <TodoCounter todos={todos} />

        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        {!!openModal && 
            <Modal>
                <TodoForm
                />
            </Modal>
        }



    </>
 )
 
}

export {AppUI}
