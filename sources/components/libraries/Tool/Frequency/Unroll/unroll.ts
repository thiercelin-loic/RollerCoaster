const unroll = (
    width: string,
    setWidth: (set: string) => string,
    display: string,
    setDisplay: (set: string) => string
) => {
    !width
        ? setWidth("20%")
        : setWidth("")

    display == "none"
        ? setDisplay("block")
        : setDisplay("none")
}

export default unroll