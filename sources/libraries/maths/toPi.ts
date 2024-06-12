const toPi = (
    setValue: (total: number) => void, 
    setNext: (total: number) => void, 
    setTotal: (total: number) => void, 
    value: number, 
    next: number,
    total: number
) => {
    if (value) setValue(Math.PI)
    if (next) setNext(Math.PI)
    if (total) setTotal(Math.PI)
}

export default toPi