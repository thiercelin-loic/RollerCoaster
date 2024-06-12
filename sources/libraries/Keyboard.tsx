import React, { useState } from 'react'

import toAdd from './maths/toAdd'
import toLess from './maths/toLess'
import toMultiply from './maths/toMultiply'
import toDivide from './maths/toDivide'
import toPercentage from './maths/toPercentage'
import toSquare from './maths/toSquare'
import toRoot from './maths/toRoot'
import toPi from './maths/toPi'
import toModulo from './maths/toModulo'

import './styles/Keyboard.css'

const Keyboard = ({ display, set }) => {
  const [operator, setOperator] = useState('')
  const [value, setValue] = useState(0)
  const [next, setNext] = useState(0)
  const [total, setTotal] = useState(0)

  const cancel = () => {
    setValue(0)
    setNext(0)
    setTotal(0)
  }

  const equalize = () => {
    setOperator('')
    setNext(0)

    if (operator == '+') toAdd(
      setValue, setTotal, value, next
    )

    if (operator == '-') toLess(
      setValue, setTotal, value, next
    )

    if (operator == '*') toMultiply(
      setValue, setTotal, value, next
    )

    if (operator == '/') toDivide(
      setValue, setTotal, value, next
    )

    if (operator == 'mod') toModulo(
      setValue, setTotal, value, next
    )
  }

  const toNumeric = (number: number) =>
    value ?
      setNext(number)
      : setValue(number)

  setTimeout(() => set(total))

  return <table className='keyboard' style={{ display }}>
    <caption>
      {next || value || total}
    </caption>
    <tr>
      <td className='keyboard' onClick={cancel}>C</td>
      <td className='keyboard' onClick={() => setOperator('(')}>{'('}</td>
      <td className='keyboard' onClick={() => setOperator(')')}>{')'}</td>
      <td className='keyboard' onClick={() => setOperator('mod')}>mod</td>
      <td className='keyboard' onClick={() => toPi(
        setValue, setNext, setTotal, 
        value, next, total
      )}>π</td>
    </tr>
    <tr>
      <td className='keyboard' id='number' onClick={() => toNumeric(7)}>7</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(8)}>8</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(9)}>9</td>
      <td className='keyboard' onClick={() => setOperator('/')}>/</td>
      <td className='keyboard' onClick={() => toRoot(
        setValue, setNext, setTotal,
        value, next, total
      )}>√</td>
    </tr>
    <tr>
      <td className='keyboard' id='number' onClick={() => toNumeric(4)}>4</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(5)}>5</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(6)}>6</td>
      <td className='keyboard' onClick={() => setOperator('*')}>*</td>
      <td className='keyboard' onClick={() => toSquare(
        setValue, setNext, setTotal,
        value, next, total
      )}>x²</td>
    </tr>
    <tr>
      <td className='keyboard' id='number' onClick={() => toNumeric(1)}>1</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(2)}>2</td>
      <td className='keyboard' id='number' onClick={() => toNumeric(3)}>3</td>
      <td className='keyboard' onClick={() => setOperator('-')}>-</td>
      <td className='keyboard' id='equal' onClick={equalize}>=</td>
    </tr>
    <tr>
      <td className='keyboard' id='number' onClick={() => toNumeric(0)}>0</td>
      <td className='keyboard' onClick={() => setOperator(',')}>,</td>
      <td className='keyboard' onClick={() => toPercentage(
        setValue, setNext, setTotal,
        value, next, total
      )}>%</td>
      <td className='keyboard' onClick={() => setOperator('+')}>+</td>
    </tr>
  </table>
}

export default Keyboard