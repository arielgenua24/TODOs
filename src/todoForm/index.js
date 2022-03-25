import React from "react";
import {TodoContext} from '../TodoContext'
import './todoFrom.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {addTodos,setOpenModal} = React.useContext(TodoContext)
    const [interest,setInterest] = React.useState('Otros')
    const [image,setImage] = React.useState('')
    const [opinion, setOpinion] = React.useState('')
    const [category, setCategory] = React.useState('Accion')
    const [choice,setChoice] = React.useState('')

    let userInterest ;
    let userCategory ;
    let userChoice;




    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const setNewOpinion = (event) => {
        setOpinion(event.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    /*const changeBckgByValue = (interestIn) => {
        console.log('vegetta')
        console.log(interestIn)
        console.log(interest)

        console.log(interest === interestIn) 
        let section = document.getElementsByClassName("TodoItem-section")
        if(interestIn === 'Nintendo') {
            section.style.backgroundColor = "red";
        } else {
            section.style.backgroundColor = "black";
        } 
   } */



    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(newTodoValue,interest,image,opinion,category,choice)
        setOpenModal(false)

        console.warn("all data", image)
    }

   


    return (
        <>
            <form 
                className="form-1"
                onSubmit={onSubmit}>
                <label>...</label>
                
                <span className="from__span--gameTitle form__span--tips">
                    Titulo del juego.
                </span>

                <textarea 
                    className="form__textArea-1"
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Titulo del juego"
                />

                <span className="from__span--opinion form__span--tips">
                    Opinion/Por que debedrias jugarlo.
                </span>

                <textarea 
                    className="form-textArea-2"
                    value={opinion}
                    onChange={setNewOpinion}
                    placeholder="Opinion del juego"
                />

                <span className="from__span--interest form__span--tips">
                    Exclusividad.
                </span>

                <select className="form__select1" onChange={(e)=>{
                    userInterest = e.target.value;
                    setInterest(userInterest);
                }}>
                    <option value='otros'selected>Otros</option>
                    <option value='Nintendo' >Nintendo</option>
                    <option value='Playstation'>Playstation</option>
                    <option value='Xbox'>Xbox</option>
                    
                </select>

                <span className="from__span--category form__span--tips">
                    Categoria.
                </span>

                <select className="form-select2" onChange={(e)=>{
                    userCategory = e.target.value;
                    setCategory(userCategory)
                   
                }}>
                    <option value='Accion'selected>Accion</option>
                    <option value='Aventura' >Aventura</option>
                    <option value='Battle Royale'>Battle Royale</option>
                    <option value='Carreras'>Carreras</option>
                    <option value='Deportes'>Deportes</option>
                    <option value='Shooting'>Shooting</option>
                    <option value='Estrategia'>Estrategia</option>
                    <option value='Multiplayer'>Multiplayer</option>
                    <option value='RPG'>RPG</option>
                    <option value='ROL'>ROL</option>
                    <option value='Sigilo'>Sigilo</option>
                    <option value='Simulacion'>Simulacion</option>
                    <option value='Supervivencia'>Supervivencia</option>
                    <option value='Terror'>Terror</option>
                    <option value='Sandbox'>Sandbox</option>
                    <option value='Survival horror'>Survival horror</option>
                    <option value='Old school'>Old school</option>
                    
                </select>

                <span className="from__span--choice form__span--tips">
                    Debes jugar/Jugado
                </span>

                <select className="form__select3" onChange={(e)=>{
                    userChoice = e.target.value;
                    setChoice(userChoice);
                }}>
                    <option value='Debo jugar'selected>Debo jugar</option>
                    <option value='Jugados' >Jugados</option>

                </select>


                <span className="from__span--image form__span--tips">
                    Imagen del videojuego
                </span>                
                <input
                    className="form_input1" 
                    value={image} 
                    placeholder="ej https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8XGEPtD1xoasK0FYkYNcCn1z.png" 
                    onChange={(e)=>
                    { const newGameImage = e.target.value;
                    setImage(newGameImage) }
                }> 
                </input>

                <span className="span__image--tip form__span--tips">
                    Tip para agregar la imagen: <br/>
                    <br/>
                    1-Entre a google y busque el videojuego que le gusta <br/>
                    <br/>
                    2-Entre a una imagen de su videojuego <br/>
                    <br/>
                    3-Mantenga el dedo sobre la imagen y saldra una venta<br/>
                    <br/>
                    4-En esa ventana toque en "Copiar imagen"<br/>
                    <br/>
                    5-Vuelva a esta app<br/>
                    <br/>
                    6-mantenga pulsado sobre la barra de abajo<br/>
                    <br/>
                    7-pegue la imagen<br/>
                    <br/>
                </span>



                <div className="div_buttons">
                    <button
                        className="button__cancelar"
                        type="submit"
                        onClick={onCancel}
                    >
                        cancelar
                    </button>
                    <button
                        className="button__submit"
                        type="submit"
                    >
                        
                        añadir
                    </button>
                </div>

               
                    

            </form>
            

        </>
        
    )
}

export {TodoForm}



