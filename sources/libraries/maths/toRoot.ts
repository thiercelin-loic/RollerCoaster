const toRoot = (
    setValue: (total: number) => void, 
    setNext: (total: number) => void, 
    setTotal: (total: number) => void, 
    value: number, 
    next: number,
    total: number
) => {
    const roots = {
        value: Math.sqrt(value),
        next: Math.sqrt(next),
        total: Math.sqrt(total),
    }

    if (value) setValue(roots.value)
    if (next) setNext(roots.next)
    if (total) setTotal(roots.total)
}

export default toRoot