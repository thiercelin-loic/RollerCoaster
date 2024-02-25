const toFrequency = (considered: number, sum: number) => {
    const frequence = considered / sum * 100
    return frequence.toFixed(2)
}

export default toFrequency