import React  from "react";

function TodoItem(props){

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
            <img className="TodoItem-image" src={props.image} alt="UserImage"></img>

        </section>
        

    )


}

export {TodoItem};