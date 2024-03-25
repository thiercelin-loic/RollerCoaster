const progress = (
    key: number,
    setKey: (set: number) => void,
    setValue: (set: number) => void
) => {
    setKey(key + 1)
    setValue(0)
}

export default progress