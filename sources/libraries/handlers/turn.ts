const turn = (state, initial, set, value) =>
    state == initial
        ? set(value)
        : set(initial)

export default turn