const insert = (state, x, y, set) => {
    const copy = [...state]
    const push = { x, y }
    copy.push(push)
    set(copy)

    console.log(copy)
}

export default insert