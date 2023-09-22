import React, { useState } from 'react';
import calculate from '../logic/calculate';
import ButtonDisplay from './btnDisplay';

function Calculator() {
  const [value, setValue] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const { total, operation, next } = value;

  function handleClick(num) {
    setValue(calculate(value, num));
  }

  return (
    <div id="Calc-holder">
      <div className="rowA ans-display">
        <ButtonDisplay result={next || operation || total || '0'} />
      </div>
      <div className="rowB">
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">AC</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">+/-</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">%</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button operator-btn"> &#xf7; </button>
      </div>
      <div className="rowC">
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">7 </button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">8 </button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">9 </button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button operator-btn">x</button>
      </div>
      <div className="rowD">
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">4 </button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">5</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">6</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button operator-btn"> -</button>
      </div>
      <div className="rowE">
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">1</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">2</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">3</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button operator-btn">+</button>
      </div>
      <div className="rowF">
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button zero-btn"> 0</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button">.</button>
        <button onClick={(e) => handleClick(e.target.textContent)} type="button" className="Calc-button operator-btn"> = </button>
      </div>
    </div>
  );
}

export default Calculator;
