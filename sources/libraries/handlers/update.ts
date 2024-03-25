const update = (
    state: [{ x: number, y: number }],
    key: number,
    value: number,
    set
) => {
    const copy = [...state]
    const updated = copy.map(copy => {
        if (copy.x === key)
            copy.y = value

            return copy
    })

    set(updated)
}

export default update