import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    let onSearchValue = (event) => {
        const searchedValue = event.target.value
        setSearchValue(searchedValue)
    }



    return[
        <>
        
         <section className="section__search">
            <span className="section__span">
                Busca titulos de manera rapida
            </span>

            <input 
            className="section__input"
            placeholder="Cebolla"
            onChange={onSearchValue} 
            
            />,

            <p>{searchValue}</p>
         </section>
            

       </>
    ]
};

export {TodoSearch};