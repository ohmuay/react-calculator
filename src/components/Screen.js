import React from 'react'

const Screen = (props)=>{
    return (
        <input className="innerScreen"type="text" value={props.output}/>
    )
}

export default Screen