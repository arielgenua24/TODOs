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
            >c
            </span>
            <p>
              {props.text}
            </p>

            <span>
                {props.choice}
            </span>

            <img className="TodoItem-image" src={props.image} alt="UserImage"></img>
            <p
             className="Todo-item-opinion"
            >
                {props.opinion}
            </p>




            <button 
                className="CreateTodoButton"
                onClick={() => onClickButton()}
                
             >
            Ver mas 
            </button>

            {!!openGameInfo && 
            <GameInform>
                <MoreInfo
                    category = {props.category}
                    interest={props.interest}
                    image={props.image}
                    key={props.text}
                    text={props.text}
                    opinion={props.opinion}
                />
            </GameInform>
        }

        </section>
        

    )


}

export {TodoItem,gameInform};