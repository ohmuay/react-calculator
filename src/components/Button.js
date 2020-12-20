import React from 'react'

const Button = (props)=>{
    return (
        <button 
        className={props.className}
        onClick={(e)=>{
            props.getChar(props.char)
        }}
        >{props.char}</button>
    )
}

export default Button;