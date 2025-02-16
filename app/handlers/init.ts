export default function init(
    tasks: string[],
    setIndex: (index: number) => void,
    setTasks: (tasks: string[]) => void
) {
    tasks.push('')
    setTasks(tasks)
    setIndex(tasks.length + 1)
}