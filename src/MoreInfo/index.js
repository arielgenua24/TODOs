import React from "react";
import { TodoContext } from "../TodoContext";
import {gameInform} from '../TodoItem'

function MoreInfo(props) {

    console.log('4')
    console.log(gameInform.text)
    

    const  {openGameInfo,
        setOpenGameInfo} = React.useContext(TodoContext)
    
    let userInterest = gameInform.interest; 

    const userBackgroundColor = {
        backgroundColor: '#F8F8FF'
    } 

    if(userInterest === 'Nintendo') {
        userBackgroundColor.backgroundColor = 'red'
    } else if(userInterest === 'Playstation') {
        userBackgroundColor.backgroundColor = 'blue'   
    } else if(userInterest === 'Xbox') {
        userBackgroundColor.backgroundColor = 'green'
    }

    const onClickButton = () => {
        setOpenGameInfo(false)
    }

    return(
        <>
        
        <section className='LastTodo-section'
        style={userBackgroundColor}
        > 
            <span 
            className='LastTodo-span LastTodo-span2'
            onClick={props.onComplete}
            >c
            </span>
            

            <p className="lastTodo-p">Tu ultima review</p>
            <img className="LastTodo-image" src={gameInform.image} alt="UserImage"></img>
            
            <div className="LastTodo-titleContainer">
                <p className="LastTodo-title">
                {gameInform.text}
                </p>
            </div>

            <div className="lastTodo-categoryContainer">
                <p className="lastTodo-category">
                    {gameInform.category}
                </p>

            </div>

            <div className="LastTodo-opinionContainer">
              <p
              className="LastTodo-opinion"
              >
              {gameInform.opinion}
              </p>
            </div>    
            

        </section>
        
        <button
            onClick={() => onClickButton()}
        > 
        Listo
        </button>

    </>
    )
        
}

export {MoreInfo};
