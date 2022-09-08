import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    // Change code below this line
    return (
      <section>
        <h2>Let&apos;s do some math!</h2>
        <div className="calculator">
          <input className="in" value="0" />

          <button className="di y" type="button">÷</button>
          <button className="mu y" type="button">&times;</button>
          <button className="mi y" type="button">-</button>
          <button className="pl y" type="button">+</button>
          <button className="eq y" type="button">=</button>
          {/* operators */}

          <button className="ac a" type="button">AC</button>
          <button className="pm a" type="button">+/-</button>
          <button className="pc a" type="button">%</button>
          {/* methods */}

          <button className="n9 a" type="button">9</button>
          <button className="n8 a" type="button">8</button>
          <button className="n7 a" type="button">7</button>
          <button className="n6 a" type="button">6</button>
          <button className="n5 a" type="button">5</button>
          <button className="n4 a" type="button">4</button>
          <button className="n3 a" type="button">3</button>
          <button className="n2 a" type="button">2</button>
          <button className="n1 a" type="button">1</button>
          <button className="n0 a" type="button">0</button>
          <button className="do a" type="button">.</button>
        </div>
      </section>
    );
    // Change code above this line
  }
}

export default Calculator;
