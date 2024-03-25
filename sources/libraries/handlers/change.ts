import event from "../types/event"

const change = (event: event, set: (set: number) => void) => {
    const value = parseInt(event.target.value)
    set(value)
}

export default change