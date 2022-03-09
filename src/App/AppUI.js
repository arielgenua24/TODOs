import React from 'react';
import {TodoCounter} from '../TodoCounter';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext'
import {TodoForm} from '../todoForm'
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
    

    return (
    <>
        <CreateTodoButton
            setOpenModal={setOpenModal}
            openModal={openModal}
        />

        <TodoList>     
            {searchedTodos?.map(todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completedTodos(todo.text)}
            />
            ))}
        </TodoList>

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
