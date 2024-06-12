const toDivide = (
    setValue: (total: number) => void, 
    setTotal: (total: number) => void, 
    value: number, 
    next: number
) => {
    setTotal(value / next)
    setValue(value / next)
}

export default toDivide