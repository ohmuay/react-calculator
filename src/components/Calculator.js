import React from 'react'
import Button from './Button'
import Screen from './Screen'
import Footer from '../base/Footer'

export default class Calculator extends React.Component{
    state = {
        output:''
    }
    getChar = (char)=>{
        if(char === '='){
            this.calculation()
        }else if(char === 'AC'){
            this.clearScreen()
        }
        else{
            this.setState((prev)=>({output:prev.output+char}))
        }
        console.log(this.state.output)
    }
    calculation = ()=>{
        const result = eval(this.state.output)
        this.setState(()=>({output:result}))
    }
    clearScreen = ()=>{
        this.setState(()=>({output:''}))
    }
    render(){
        return (
            <div className="container">
            <div className="calculator">
            <div className="screen">
            <Screen output={this.state.output}/>
            </div>
            <div className="numpad">
            
            <div className="row">
            <Button char='(' getChar={this.getChar}/>
            <Button char=')' getChar={this.getChar}/>
            <Button char='%' getChar={this.getChar}/>
            <Button char='AC' getChar={this.getChar}/>
            </div>
            <div className="row">
            <Button char='7' getChar={this.getChar}/>
            <Button char='8' getChar={this.getChar}/>
            <Button char='9' getChar={this.getChar}/>
            <Button char='/' getChar={this.getChar}/>
            </div>
            <div className="row">
            <Button char='4' getChar={this.getChar}/>
            <Button char='5' getChar={this.getChar}/>
            <Button char='6' getChar={this.getChar}/>
            <Button char='*' getChar={this.getChar}/>
            </div>
            <div className="row">
            <Button char='1' getChar={this.getChar}/>
            <Button char='2' getChar={this.getChar}/>
            <Button char='3' getChar={this.getChar}/>
            <Button char='-' getChar={this.getChar}/>
            </div>
            <div className="row">
            <Button char='0' getChar={this.getChar}/>
            <Button char='.' getChar={this.getChar}/>
            <Button char='=' getChar={this.getChar}/>
            <Button char='+' getChar={this.getChar}/>
            </div>
            </div>
            
            </div>
            <Footer />
            </div>
            )
        }
    }