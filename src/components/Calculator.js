import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    operation: null,
    next: null,
    error: null,
  });

  const handleClick = (event) => {
    setState((prevState) => calculate(prevState, event.target.textContent));
  };

  return (
    <section>
      <h2>Let&apos;s do some math!</h2>
      <div className="calculator">

        <div className="in">
          { state.total }
          { state.operation }
          { state.next }
          { state.error }
        </div>

        {/* operators */}
        <button onClick={handleClick} className="di y" type="button">÷</button>
        <button onClick={handleClick} className="mu y" type="button">x</button>
        <button onClick={handleClick} className="mi y" type="button">-</button>
        <button onClick={handleClick} className="pl y" type="button">+</button>
        <button onClick={handleClick} className="eq y" type="button">=</button>

        {/* methods */}
        <button onClick={handleClick} className="ac a" type="button">AC</button>
        <button onClick={handleClick} className="pm a" type="button">+/-</button>
        <button onClick={handleClick} className="pc a" type="button">%</button>

        {/* numbers */}
        <button onClick={handleClick} className="n9 a" type="button">9</button>
        <button onClick={handleClick} className="n8 a" type="button">8</button>
        <button onClick={handleClick} className="n7 a" type="button">7</button>
        <button onClick={handleClick} className="n6 a" type="button">6</button>
        <button onClick={handleClick} className="n5 a" type="button">5</button>
        <button onClick={handleClick} className="n4 a" type="button">4</button>
        <button onClick={handleClick} className="n3 a" type="button">3</button>
        <button onClick={handleClick} className="n2 a" type="button">2</button>
        <button onClick={handleClick} className="n1 a" type="button">1</button>
        <button onClick={handleClick} className="n0 a" type="button">0</button>
        <button onClick={handleClick} className="do a" type="button">.</button>
      </div>
    </section>
  );
}

export default Calculator;
