import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {

    
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