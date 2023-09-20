import './Calc.css';

function Button ({value, handleClick}){
 return (
    <button onClick={() => handleClick(value)}>{value}</button>
 );
}

function Calculator() {
    const handleButtonClick = (value) => {
        console.log("Button ${value} clicked")
    }
  return (
    <div id="Calc-holder">
      <div className="rowA ans-display">123</div>
      <div className="rowB">
        <button type="button" handleClick={handleButtonClick} className="Calc-button">AC</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button">+/-</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button">%</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button operator-btn">+</button>
      </div>
      <div className="rowC">
        <button type="button" handleClick={handleButtonClick} className="Calc-button">7</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button">8</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button">9</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button operator-btn">x</button>
      </div>
      <div className="rowD">
        <button type="button" handleClick={handleButtonClick} className="Calc-button">4</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button">5</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button">6</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button operator-btn">-</button>
      </div>
      <div className="rowE">
        <button type="button" handleClick={handleButtonClick} className="Calc-button">1</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button">2</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button">3</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button operator-btn">+</button>
      </div>
      <div className="rowF">
        <button type="button" handleClick={handleButtonClick} className="Calc-button zero-btn">0</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button">.</button>
        <button type="button" handleClick={handleButtonClick} className="Calc-button operator-btn">=</button>
      </div>
    </div>

  );
}

export default Calculator;
