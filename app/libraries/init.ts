export default function init(
    tasks: string[],
    setTasks: (tasks: string[]) => void,
    setIndex: (index: number) => void
) {
    tasks.push('main')
    setTasks(tasks)
    setIndex(tasks.length + 1)
}