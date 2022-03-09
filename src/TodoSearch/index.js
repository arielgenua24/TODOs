import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    let onSearchValue = (event) => {
        const searchedValue = event.target.value
        setSearchValue(searchedValue)
    }



    return[
        <input 
          placeholder="Cebolla"
          onChange={onSearchValue} 
        
        />,

        <p>{searchValue}</p>
    ]
};

export {TodoSearch};