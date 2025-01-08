export default function save(
    tasks: string[], 
    setTasks: (tasks: string[]) => void,
    setLocal: (local: boolean) => void,
    setIndex: (index: number) => void
) {
    tasks.push('save')
    setTasks(tasks)
    setLocal(true)
    setIndex(tasks.length - 1)
}