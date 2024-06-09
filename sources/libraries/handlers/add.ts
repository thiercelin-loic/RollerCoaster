const add = (
    state: [{ x: number, y: number }],
    x: number,
    y: number,
    set: (
        toSet: {
            x: number,
            y: number
        }[]
    ) => void
) => {
    const copy = [...state]
    const init = isNaN(y) ? 0 : y
    const push = { x, y: init }
    
    copy.push(push)
    set(copy)
}

export default add