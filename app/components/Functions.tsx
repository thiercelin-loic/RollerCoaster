export default function Functions() {
    const functions = [
        'SUM',
        'AVERAGE',
        'MAX',
        'MIN',
        'COUNT',
        'CONTA',
        'IF',
        'VLOOKUP',
        'HLOOKUP',
        'INDEX',
        'MATCH',
    ]

    return <select>
        <option>--Select your function--</option>
        {functions.map((fx) => <option>{fx}</option>)}
    </select>
}