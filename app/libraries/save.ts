export default function save(
    tasks: string[], 
    setIndex: (index: number) => void,
    setLocal: (local: boolean) => void,
    setTasks: (tasks: string[]) => void,
) {
    tasks.push('save')
    setIndex(tasks.length - 1)
    setLocal(true)
    setTasks(tasks)
}