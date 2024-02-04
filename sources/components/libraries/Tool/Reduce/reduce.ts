const reducing = (
    enlargement: number,
    setEnlargement: (set: number) =>
        number
) =>
    setEnlargement(enlargement - 1)

export default reducing