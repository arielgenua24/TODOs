import React from 'react'
import  ReactDOM  from 'react-dom'
import './gameInform.css'

function GameInform({children}) {
    return ReactDOM.createPortal(
        <div className="gameInformBackground">
         {children}
        </div>,
        document.getElementById('gameInform')
    )
}

export {GameInform}