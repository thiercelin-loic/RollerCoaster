const add = (state, x, y, set) => {
    const copy = [...state]
    const push = { x, y }
    copy.push(push)
    set(copy)
}

export default add