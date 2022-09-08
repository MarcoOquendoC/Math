import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
      err: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const result = calculate(this.state, event.target.textContent);
    this.setState(result);
  }

  render() {
    const {
      total, next, error, operation,
    } = this.state;
    return (
      <section>
        <h2>Let&apos;s do some math!</h2>
        <div className="calculator">

          <div className="in">
            { total }
            { operation }
            { next }
            { error }
          </div>

          {/* operators */}
          <button onClick={this.handleClick} className="di y" type="button">÷</button>
          <button onClick={this.handleClick} className="mu y" type="button">x</button>
          <button onClick={this.handleClick} className="mi y" type="button">-</button>
          <button onClick={this.handleClick} className="pl y" type="button">+</button>
          <button onClick={this.handleClick} className="eq y" type="button">=</button>

          {/* methods */}
          <button onClick={this.handleClick} className="ac a" type="button">AC</button>
          <button onClick={this.handleClick} className="pm a" type="button">+/-</button>
          <button onClick={this.handleClick} className="pc a" type="button">%</button>

          {/* numbers */}
          <button onClick={this.handleClick} className="n9 a" type="button">9</button>
          <button onClick={this.handleClick} className="n8 a" type="button">8</button>
          <button onClick={this.handleClick} className="n7 a" type="button">7</button>
          <button onClick={this.handleClick} className="n6 a" type="button">6</button>
          <button onClick={this.handleClick} className="n5 a" type="button">5</button>
          <button onClick={this.handleClick} className="n4 a" type="button">4</button>
          <button onClick={this.handleClick} className="n3 a" type="button">3</button>
          <button onClick={this.handleClick} className="n2 a" type="button">2</button>
          <button onClick={this.handleClick} className="n1 a" type="button">1</button>
          <button onClick={this.handleClick} className="n0 a" type="button">0</button>
          <button onClick={this.handleClick} className="do a" type="button">.</button>
        </div>
      </section>
    );
    // Change code above this line
  }
}

export default Calculator;
