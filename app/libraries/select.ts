export default function select(event: any, setLocal: (local: boolean) => void) {
    event.target.value == 'local'
        ? setLocal(true)
        : setLocal(false)
}