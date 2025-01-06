export default function save(
    value: boolean, 
    saves: boolean[], 
    setSaves: (saves: boolean[]) => void,
    setLocal: (local: boolean) => void,
    setIndex: (index: number) => void
) {
    saves.push(value)
    setSaves(saves)
    setLocal(true)
    setIndex(saves.length - 1)
}