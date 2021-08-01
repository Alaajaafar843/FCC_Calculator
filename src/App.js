import React from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';


class ComponentResult extends React.Component {


  render() {

    let {result} = this.props

    return(
      <div id="display">
        {result}
      </div>
    )
  }


}

class Buttons extends React.Component {

  render() {

    return(

      <div>
          <button name="AC" onClick={e => this.props.onClick(e.target.name)} class="button" id="clear">AC</button>
          <button name="*" onClick={e => this.props.onClick(e.target.name)} class="button" id="multiply">x</button>
          <button name="/" onClick={e => this.props.onClick(e.target.name)} class="button" id="divide">/</button>
          <button name="+" onClick={e => this.props.onClick(e.target.name)} class="button" id="add">+</button> <br></br>

          <button name="7" onClick={e => this.props.onClick(e.target.name)} class="button" id="seven">7</button>
          <button name="8" onClick={e => this.props.onClick(e.target.name)} class="button" id="eight">8</button>
          <button name="9" onClick={e => this.props.onClick(e.target.name)} class="button" id="nine">9</button>
          <button name="-" onClick={e => this.props.onClick(e.target.name)} class="button" id="subtract">_</button> <br></br>

          <button name="4" onClick={e => this.props.onClick(e.target.name)} class="button" id="four">4</button>
          <button name="5" onClick={e => this.props.onClick(e.target.name)} class="button" id="five">5</button>
          <button name="6" onClick={e => this.props.onClick(e.target.name)} class="button" id="six">6</button>
          <button name="=" onClick={e => this.props.onClick(e.target.name)} class="button" id="equals">=</button> <br></br>

          <button name="1" onClick={e => this.props.onClick(e.target.name)} class="button" id="one">1</button>
          <button name="2" onClick={e => this.props.onClick(e.target.name)} class="button" id="two">2</button>
          <button name="3" onClick={e => this.props.onClick(e.target.name)} class="button" id="three">3</button>
          <button name="0" onClick={e => this.props.onClick(e.target.name)} class="button" id="zero">0</button> <br></br>

          <button name="." onClick={e => this.props.onClick(e.target.name)} id="decimal">.</button>
      </div>

    )
  }

}



class App extends React.Component {

  constructor(){

    super();

    this.state ={

      result : '0'

    }

  }
  calculate() {

    this.setState({
      result : (eval(this.state.result) || "") + ""
    })

  }

  reset() {
    this.setState({
      result: ''
    })
  }

  clear() {
    this.setState({
      result: "0"
    })
  }

  onClick = button => {
    if(button==='='){
      this.calculate();
    }
    else if(button==="AC"){
      this.clear();
    }

    else{
      if(this.state.result==='0'){
        this.reset();
        this.setState({
          result: button
        })
      }
      else{
        this.setState({
          result: this.state.result+button
        })
      }
    }
  }

  render() {
    return(
      <div id="main">
          <div id="calculator">
          <ReactFCCtest />
          <ComponentResult result={this.state.result}/>
          <Buttons onClick={this.onClick}/>
          </div>
      </div>
    )
  }

}

export default App;
