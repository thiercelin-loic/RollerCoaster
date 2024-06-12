import React, { useState } from 'react'
import './styles/Keyboard.css'

const Keyboard = ({ display, set }) => {
  const [operator, setOperator] = useState('')
  const [value, setValue] = useState(0)
  const [next, setNext] = useState(0)
  const [total, setTotal] = useState(0)

  const insert = () =>
    set(total)

  const add = () => {
    setTotal(value + next)
    setValue(value + next)
  }

  const less = () => {
    setTotal(value - next)
    setValue(value - next)
  }

  const multiply = () => {
    setTotal(value * next)
    setValue(value * next)
  }

  const divide = () => {
    setTotal(value / next)
    setValue(value / next)
  }

  const cancel = () => {
    setValue(0)
    setNext(0)
    setTotal(0)
  }

  const equalize = () => {
    setOperator('')
    setNext(0)

    if (operator == '+') add()
    if (operator == '-') less()
    if (operator == '*') multiply()
    if (operator == '/') divide()
  }

  const toNumeric = (number: number) =>
    value ?
      setNext(number)
      : setValue(number)

  return <table className='keyboard' style={{ display }}>
    <caption>
      {next || value || total}
      <p className='insert' onClick={insert}>+</p>
    </caption>
    <tr>
      <td className='keyboard' onClick={cancel}>C</td>
      <td className='keyboard' onClick={() => setOperator('(')}>{'('}</td>
      <td className='keyboard' onClick={() => setOperator(')')}>{')'}</td>
      <td className='keyboard' onClick={() => setOperator('%')}>%</td>
      <td className='keyboard' onClick={() => setOperator('π')}>π</td>
    </tr>
    <tr>
      <td className='keyboard' id='number' onClick={() => toNumeric(7)}>7</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(8)}>8</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(9)}>9</td>
      <td className='keyboard' onClick={() => setOperator('/')}>/</td>
      <td className='keyboard' onClick={() => setOperator('√')}>√</td>
    </tr>
    <tr>
      <td className='keyboard' id='number' onClick={() => toNumeric(4)}>4</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(5)}>5</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(6)}>6</td>
      <td className='keyboard' onClick={() => setOperator('*')}>*</td>
      <td className='keyboard' onClick={() => setOperator('y')}>y</td>
    </tr>
    <tr>
      <td className='keyboard' id='number' onClick={() => toNumeric(1)}>1</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(2)}>2</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(3)}>3</td>
      <td className='keyboard' onClick={() => setOperator('-')}>-</td>
      <td className='keyboard' onClick={() => setOperator('x')}>x</td>
    </tr>
    <tr>
      <td className='keyboard' id='number' onClick={() => toNumeric(0)}>0</td>
      <td className='keyboard' onClick={() => setOperator(',')}>,</td>
      <td className='keyboard' onClick={() => setOperator('²')}>²</td>
      <td className='keyboard' onClick={() => setOperator('+')}>+</td>
      <td className='keyboard' id='equal' onClick={equalize}>=</td>
    </tr>
  </table>
}

export default Keyboard