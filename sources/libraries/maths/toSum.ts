const toSum = (values: [{ x: number, y: number }]) => {
        let sum = 0

        values.map(value => sum =+ value.y)
        return sum
    }

export default toSum