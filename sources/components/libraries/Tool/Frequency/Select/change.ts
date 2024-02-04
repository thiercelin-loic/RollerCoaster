import event from "./event"

const change = (
    event: event,
    setFormat: (set: string) => void
) => {
    const value = event.target.value
    const lowercase = value.toLocaleLowerCase()

    if (lowercase == "format")
        setFormat("percent")
    else
        setFormat(lowercase)

}

export default change