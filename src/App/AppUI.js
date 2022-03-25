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
        setOpenModal,
        openGameInfo,
        setOpenGameInfo
    } = React.useContext(TodoContext)


    let LastElement = searchedTodos.length - 1;
    let showLastTodo = searchedTodos[LastElement]
    console.log(showLastTodo)

    

    return (
    <>
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />


        <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}
        />

        <TodoList>     
            {searchedTodos?.map(todo => (
            <TodoItem
                choice = {searchedTodos.choice}
                interest={todo.interest}
                image={todo.image}
                category = {todo.category}
                key={todo.text}
                text={todo.text}
                opinion={todo.opinion}
                completed={todo.completed}
                onComplete={() => completedTodos(todo.text)}
                openGameInfo={openGameInfo}
                setOpenGameInfo={setOpenGameInfo}
            />
            ))}
        </TodoList>

       
        <LastTodo
            choice = {showLastTodo?.choice}
            category = {showLastTodo?.category}
            interest={showLastTodo?.interest}
            image={showLastTodo?.image}
            key={showLastTodo?.text}
            text={showLastTodo?.text}
            opinion={showLastTodo?.opinion}
            onComplete={() => completedTodos(showLastTodo?.text)}
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
