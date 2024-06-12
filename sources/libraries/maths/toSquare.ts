const toSquare = (
    setValue: (total: number) => void, 
    setNext: (total: number) => void, 
    setTotal: (total: number) => void, 
    value: number, 
    next: number,
    total: number
) => {
    if (value) setValue(value * value)
    if (next) setNext(next * next)
    if (total) setTotal(total * total)
}

export default toSquare