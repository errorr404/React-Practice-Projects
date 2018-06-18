import React from 'react';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      exp:'expression',
      result:'0'
    }
  }
  handleUpdate = (val) => {
    if(val){
      const calculateResult = eval(val);
      //console.log(calculateResult);
      this.setState(()=>({
        exp: val,
        result: calculateResult
      }));
    }
    //console.log(val);

  }
  render() {
    return (
      <div>
        <Form expression={this.state.exp} result={this.state.result} handleUpdate={this.handleUpdate}/>
          <Form expression={this.state.exp} result={this.state.result} handleUpdate={this.handleUpdate}/>
        <Result expression={this.state.exp} result={this.state.result}/>
      </div>
    );
  }
}
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handelCalculate = this.handelCalculate.bind(this);

  }
  handelCalculate(e) {
    e.preventDefault();
    const exp = e.target.elements.expression.value;
      this.props.handleUpdate(exp);

    //console.log(exp1);

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handelCalculate}>
          <input type="text" name='expression' placeholder="enter the expression here"></input>
          {/* <input type= "text" name='expression1' placeholder='Enter the value of the expression1'></input> */}
          <button>Calculate result</button>
        </form>
      </div>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <div>
      <p>Result:-</p>
      <p>{this.props.expression}={this.props.result}</p>
    </div>
    );
  }
}
