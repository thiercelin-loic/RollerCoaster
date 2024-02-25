const initial = 0

const toSum = (values: number[]) =>
    values.reduce(
        (previous, current) => previous + current,
        initial
    )

export default toSum