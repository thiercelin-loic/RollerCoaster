const toFrequency = (considered: number, sum: number) => {
    const frequency = considered / sum * 100
    return frequency
}

export default toFrequency