export default function Charts() {
    const charts = [
        'Bar Chart',
        'Box Plot',
        'Density Plot',
        'Histogram',
        'Pie Chart'
    ]

    return <select>
        <option>--Select your chart--</option>
        {charts.map((chart) => <option>{chart}</option>)}
    </select>
}