const turn = (
    state: string,
    initial: string,
    set: (toSet: string) => void,
    value: string
) =>
    state == initial
        ? set(value)
        : set(initial)

export default turn