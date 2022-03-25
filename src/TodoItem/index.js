import React  from "react";
import { TodoContext } from "../TodoContext";
import { MoreInfo } from "../MoreInfo";
import {GameInform} from '../gameInform'

//puedo anadir un: Reciente añadido.

const gameInform = {
    text: '',
    interest: '',
    opinion: '',
    category: '',
    image: '',
}



function TodoItem(props){
    

    const { openGameInfo,
        setOpenGameInfo} = React.useContext(TodoContext)


    let userInterest = props.interest; 

    const userBackgroundColor = {
        backgroundColor: '#F8F8FF',
        background: ''
    } 

    if(userInterest === 'Nintendo') {
        userBackgroundColor.backgroundColor = 'red'
        userBackgroundColor.background = 'linear-gradient(292deg, rgba(25,28,25,1) 0%, rgba(30,81,40,1) 67%, rgb(81 148 67) 100%)'
    } else if(userInterest === 'Playstation') {
        userBackgroundColor.backgroundColor = 'blue'   
        
    } else if(userInterest === 'Xbox') {
        userBackgroundColor.backgroundColor = 'green'
    }

    const onClickButton = () => {
        setOpenGameInfo(prevState => !prevState)
        console.log('3')
        

        gameInform.text = props.text
        gameInform.category = props.category
        gameInform.image = props.image
        gameInform.interest = props.interest
        gameInform.opinion = props.opinion

        console.log(gameInform)

    }


    return(



        <section className='TodoItem-section'
        style={userBackgroundColor}
        > 
            <span 
            className='Todoitem-span Todoitem-span2'
            onClick={props.onComplete}
            >
                Borrar
            </span>
            <p className="section__p--title">
              {props.text}
            </p>

            <span className="section__span--interest">
                {props.interest}
            </span>

            <span className="section__span--category">
                {props.category}
            </span>
            

            <span>
                {props.choice}
            </span>

            <img className="TodoItem-image" src={props.image} alt="UserImage"></img>
            {/*<p
             className="Todo-item-opinion"
            >
                {props.opinion}
            </p> */}




            <button 
                className="seeMoreButton"
                onClick={() => onClickButton()}
                
             >
            Ver mas 
            </button>

            {!!openGameInfo && 
            <GameInform>
                <MoreInfo
                />
            </GameInform>
        }

        </section>
        

    )


}

export {TodoItem,gameInform};