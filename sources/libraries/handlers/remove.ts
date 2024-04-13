const remove = (
    state: { x: number, y: number }[],
    set,
    value: number
) => {
    const copy = [...state]
    const updated = copy.filter(
        (copy) => copy.x !== value
    )

    console.log(updated)
    set(updated)
}

export default remove