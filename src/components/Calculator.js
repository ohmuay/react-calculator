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
            if(this.state.output !== '')
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
            <Button char='(' className="button" getChar={this.getChar}/>
            <Button char=')' className="button" getChar={this.getChar}/>
            <Button char='%' className="button" getChar={this.getChar}/>
            <Button char='AC' className="button" getChar={this.getChar}/>
            </div>
            <div className="row">
            <Button char='7' className="button" getChar={this.getChar}/>
            <Button char='8' className="button" getChar={this.getChar}/>
            <Button char='9' className="button" getChar={this.getChar}/>
            <Button char='/' className="button" getChar={this.getChar}/>
            </div>
            <div className="row">
            <Button char='4' className="button" getChar={this.getChar}/>
            <Button char='5' className="button" getChar={this.getChar}/>
            <Button char='6' className="button" getChar={this.getChar}/>
            <Button char='*' className="button" getChar={this.getChar}/>
            </div>
            <div className="row">
            <Button char='1' className="button" getChar={this.getChar}/>
            <Button char='2' className="button" getChar={this.getChar}/>
            <Button char='3' className="button" getChar={this.getChar}/>
            <Button char='-' className="button" getChar={this.getChar}/>
            </div>
            <div className="row">
            <Button char='0' className="button" getChar={this.getChar}/>
            <Button char='.' className="button" getChar={this.getChar}/>
            <Button char='=' className="button button--equal" getChar={this.getChar}/>
            <Button char='+' className="button" getChar={this.getChar}/>
            </div>
            </div>
            
            </div>
            <Footer />
            </div>
            )
        }
    }