import React from "react";

function LastTodo(props) {
    
    let userInterest = props.interest; 

    const userBackgroundColor = {
        backgroundColor: '#F8F8FF',
        background: '',
        backgroundBlendMode: 'overlay, lighten, overlay, color-burn, normal'

    } 

    if(userInterest === 'Nintendo') {
        userBackgroundColor.backgroundColor = 'red'
        
    } else if(userInterest === 'Playstation') {
        userBackgroundColor.backgroundColor = 'blue'   
    } else if(userInterest === 'Xbox') {
        userBackgroundColor.background = 'linear-gradient(301deg, rgba(25,28,25,1) 0%, rgba(30,81,40,1) 67%, rgba(78,159,61,1) 100%)'
        
    }


    return(
        <>
        
        
        <img className="lastTodo-backgroundImage" src={props.image} alt="UserImage"></img>
        
        <section className="LastTodo-blurEffect">
        </section>

        <section className='LastTodo-section'
        style={userBackgroundColor}
        > 
            <span 
            className='LastTodo-span LastTodo-span2'
            onClick={props.onComplete}
            >c
            </span>
            

            <p className="lastTodo-p">Tu ultima review</p>
            <img className="LastTodo-image" src={props.image} alt="UserImage"></img>
            
            <div className="LastTodo-titleContainer">
                <p className="LastTodo-title">
                {props.text}
                </p>
            </div>

            <div className="lastTodo-categoryContainer">
                <p className="lastTodo-category">
                    {props.category}
                </p>

            </div>

            <div className="LastTodo-opinionContainer">
              <p
              className="LastTodo-opinion"
              >
              {props.opinion}
              </p>
            </div>    
            

        </section>
        
        </>
    )

}

export {LastTodo};