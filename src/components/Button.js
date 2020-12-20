import React from 'react'

const Button = (props)=>{
    return (
        <button 
        className="button"
        onClick={(e)=>{
            props.getChar(props.char)
        }}
        >{props.char}</button>
    )
}

export default Button;