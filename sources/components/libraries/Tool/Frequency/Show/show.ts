const show = (
    frequency: boolean,
    setFrequency: (set: boolean) => boolean,
    setColor: (set: string) => string
) => {
    if (frequency) {
        setFrequency(false)
        setColor("lightgrey")
    } else {
        setFrequency(true)
        setColor("orange")
    }
}

export default show