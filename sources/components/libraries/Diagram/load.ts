const load = (
    positions,
    setPositions,
    sum,
    setSum,
    values,
    index,
    setIndex
) => {
    const copy = [...positions]

    const pushing = {
        x: index,
        y: values[index]
    }

    if (index < values.length) {
        copy.push(pushing)
        setPositions(copy)
        setSum(sum + values[index])
        setIndex(index + 1)
    }
}

export default load