import React from "react";
import { TodoContext } from "../TodoContext";
import {gameInform} from '../TodoItem'
import './MoreInfo.css';

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
        userBackgroundColor.background = 'linear-gradient(176deg, rgba(25,28,25,1) 0%, rgb(27 39 104) 67%, rgb(83 87 122) 100%)' 

    } else if(userInterest === 'Xbox') {
        userBackgroundColor.backgroundColor = 'green'
        userBackgroundColor.background = 'linear-gradient(301deg, rgba(25,28,25,1) 0%, rgba(30,81,40,1) 67%, rgba(78,159,61,1) 100%)' 
    }

    const onClickButton = () => {
        setOpenGameInfo(false)
    }

    return(
        <>
        

        <section className='moreInfo-section'
        style={userBackgroundColor}
        > 

            <button
            className="section__button--moreInfo"      
            onClick={() => onClickButton()}
            > 
            Listo
            </button>

            <span 
            className='moreInfo-span moreInfo-span2'
            onClick={props.onComplete}
            >
                
            </span>
            

            <p className="moreInfo-p">Tu ultima review</p>
            <img className="moreInfo-image" src={gameInform.image} alt="UserImage"></img>
            
            <div className="moreInfo-titleContainer">
                <p className="moreInfo-title">
                {gameInform.text}
                </p>
            </div>

            <div className="moreInfo-categoryContainer">
                <p className="moreInfo-category">
                    {gameInform.category}
                </p>

            </div>

            <div className="moreInfo-opinionContainer">
              <p
              className="moreInfo-opinion"
              >
              {gameInform.opinion}
              </p>
            </div>    
            
            

        </section>
        
        

    </>
    )
        
}

export {MoreInfo};
