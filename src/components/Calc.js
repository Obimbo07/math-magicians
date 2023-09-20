import './Calc.css';
import PropTypes from 'prop-types';

function Button({
  value, handleClick, className,
}) {
  return (
    <button type="button" className={className} onClick={() => handleClick(value)}>{value}</button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
};

function handleButtonClick(value) {
  console.log(`Button ${value} clicked`);
}

function Calculator() {
  return (
    <div id="Calc-holder">
      <div className="rowA ans-display">123</div>
      <div className="rowB">
        <Button value="AC" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="+/-" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="%" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="+" type="button" handleClick={handleButtonClick} className="Calc-button operator-btn" />
      </div>
      <div className="rowC">
        <Button value="7" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="8" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="9" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="x" type="button" handleClick={handleButtonClick} className="Calc-button operator-btn" />
      </div>
      <div className="rowD">
        <Button value="4" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="5" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="6" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="-" type="button" handleClick={handleButtonClick} className="Calc-button operator-btn" />
      </div>
      <div className="rowE">
        <Button value="1" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="2" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="3" type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="+" type="button" handleClick={handleButtonClick} className="Calc-button operator-btn" />
      </div>
      <div className="rowF">
        <Button value="0" type="button" handleClick={handleButtonClick} className="Calc-button zero-btn" />
        <Button value="." type="button" handleClick={handleButtonClick} className="Calc-button" />
        <Button value="=" type="button" handleClick={handleButtonClick} className="Calc-button operator-btn" />
      </div>
    </div>
  );
}

export default Calculator;
