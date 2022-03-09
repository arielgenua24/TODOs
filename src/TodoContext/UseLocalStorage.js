import React from "react";


function useLocalStorage(itemName,initialValue){

    const localStorageItem = localStorage.getItem(itemName)
      let parsedItem;
  
      if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }
  
      const [item, setItem] = React.useState(parsedItem)
      console.log(`local`)
      console.log(item)
      const saveItem = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos)
        localStorage.setItem(itemName,stringifiedTodos)
        setItem(newTodos)
  
  
      }
  
      return {
        item,
        saveItem,
        parsedItem
      }
  
  
}

export { useLocalStorage }