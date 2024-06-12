const toPercentage = (
    setValue: (total: number) => void,
    setNext: (total: number) => void, 
    setTotal: (total: number) => void, 
    value: number, 
    next: number,
    total: number
) => {
    if (value) setValue(value / 100)
    if (next) setNext(next / 100)
    if (total) setTotal(total / 100)
}

export default toPercentage