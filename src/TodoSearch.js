import React from 'react';

function TodoSearch() {

    let [state,newState] =  React.useState('juan')


    let onSearchValue = (event) => {
        const searchedValue = event.target.value
        newState(searchedValue)
    }



    return[
        <input 
          placeholder="Cebolla"
          onChange={onSearchValue} 
        
        />,

        <p>{state}</p>
    ]
};

export {TodoSearch};