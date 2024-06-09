import React, { useState } from "react"
import "./styles/Keyboard.css"

const Keyboard = ({ display, set }) => {
  return <table className="keyboard" style={{ display }}>
    <caption>
      0
      <p className="add" onClick={() => set(0)}>+</p>
    </caption>
    <tr>
      <td className="keyboard">C</td>
      <td className="keyboard">{"("}</td>
      <td className="keyboard">{")"}</td>
      <td className="keyboard">%</td>
      <td className="keyboard">π</td>
    </tr>
    <tr>
      <td className="keyboard" id="number">7</td>
      <td className="keyboard" id="number">8</td>
      <td className="keyboard" id="number">9</td>
      <td className="keyboard">/</td>
      <td className="keyboard">√</td>
    </tr>
    <tr>
      <td className="keyboard" id="number" >4</td>
      <td className="keyboard" id="number" >5</td>
      <td className="keyboard" id="number" >6</td>
      <td className="keyboard">*</td>
      <td className="keyboard">y</td>
    </tr>
    <tr>
      <td className="keyboard" id="number">1</td>
      <td className="keyboard" id="number">2</td>
      <td className="keyboard" id="number">3</td>
      <td className="keyboard">-</td>
      <td className="keyboard">x</td>
    </tr>
    <tr>
      <td className="keyboard" id="number">0</td>
      <td className="keyboard">,</td>
      <td className="keyboard">²</td>
      <td className="keyboard">+</td>
      <td className="keyboard" id="equal">=</td>
    </tr>
  </table>
}

export default Keyboard