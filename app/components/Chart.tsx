import chart from "../types/chart"

export default function Chart({ x }: chart) {
    const sum = x.reduce((accumulator, current) => {
        return accumulator + current
    }, 0)

    return <span className="chart">{x?.map((x, index) => {
        const marginLeft = index
        const paddingTop = x / sum * 100
        const style = { marginLeft, paddingTop }

        return <span className="value" style={style}>
            {x}
        </span>
    })}</span>
}