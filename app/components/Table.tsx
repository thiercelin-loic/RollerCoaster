import { useState } from 'react'

export default function Table({ rows = 100, cols = 100 }) {
    const [data, setData] = useState(
        Array.from({ length: rows }, () => Array(cols).fill(''))
    )

    function handleChange(row: number | any[], column: number, value: string) {
        const newData = data.map((r, i) =>
            r.map((c: any, j: number) => i === row
                && j === column
                ? value
                : c
            ))

        setData(newData)
    }

    return <table>
        <tbody>{
            data.map((row, rowIndex) => <tr key={rowIndex}>{
                row.map((cell, colIndex) => <td key={colIndex}>
                    <input
                        className='table'
                        type='text'
                        value={cell}
                        onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                    />
                </td>
                )}
            </tr>
            )
        }
        </tbody>
    </table>
}