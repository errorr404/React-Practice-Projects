import React from 'react';

export default class App extends React.Component {
  constructor(props) {

    super(props);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onDeletePressed = this.onDeletePressed.bind(this);
    this.onEvaluatePressed = this.onEvaluatePressed.bind(this);
    this.state= {
      expression: ''
    };
  }
  onKeyPressed(text){
    this.setState((prevState)=>({
      expression: prevState.expression + text
    }));
  }
  onDeletePressed() {
    this.setState((prevState)=>({
     expression: prevState.expression.length <= 1 ? '' : prevState.expression.slice(0,-1)
   }));
  }
  onEvaluatePressed() {
    //const inti = parseInt(this.state.expression,10);
    console.log(this.state.expression[this.state.expression.length-1]);
     // if the string is 01+5 then it changes it to 1+5
    if(this.state.expression[0]==='0')
    {
      this.setState((prevState)=>({
        expression: prevState.expression.substring(1,prevState.expression.length-1)

      })
    );
    }
    console.log(this.state.expression);
    const result = eval(this.state.expression);
    this.setState((prevState)=>({
      expression: result.toString()
    })
  );
  }
  render() {
    return(
      <div>
        <DisplayWindow expression = {this.state.expression} />
        <Key text="0" onKeyPressed = {this.onKeyPressed}/>
        <Key text="1" onKeyPressed = {this.onKeyPressed}/>
        <Key text="2" onKeyPressed = {this.onKeyPressed}/>
        <Key text="3" onKeyPressed = {this.onKeyPressed}/>
        <Key text="4" onKeyPressed = {this.onKeyPressed}/>
        <Key text="5" onKeyPressed = {this.onKeyPressed}/>
        <Key text="6" onKeyPressed = {this.onKeyPressed}/>
        <Key text="7" onKeyPressed = {this.onKeyPressed}/>
        <Key text="8" onKeyPressed = {this.onKeyPressed}/>
        <Key text="9" onKeyPressed = {this.onKeyPressed}/>
        <Key text="+" onKeyPressed = {this.onKeyPressed}/>
        <Key text="-" onKeyPressed = {this.onKeyPressed}/>
        <Key text="*" onKeyPressed = {this.onKeyPressed}/>
        <Key text="/" onKeyPressed = {this.onKeyPressed}/>
         <button onClick={this.onDeletePressed}>C</button>
         <button onClick={this.onEvaluatePressed}>=</button>

      </div>
    );
  }
}


function DisplayWindow(props) {
  return (<input type='text' value={props.expression} placeholder="Enter the expression" disabled={true}/>);
}

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }
  onKeyPressed() {
    this.props.onKeyPressed(this.props.text);
  }
  render() {
    return(
      <button onClick={this.onKeyPressed}>{this.props.text}</button>
    );
  }
}
