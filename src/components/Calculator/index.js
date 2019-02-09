import React from 'react';

import { numbers } from './contants';
import Button from './Button';
import Display from './Display';

import './styles.scss'

function Calculator({ operations, handleClick }) {
  return (
    <div className="calculator">
      <Display data={operations}/>
      <div className="calculator__buttons">
        {numbers.map((number, index) => <Button key={index} onClick={handleClick} {...number} />)}
      </div>
    </div>
  );
}

export default Calculator;