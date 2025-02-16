export default function transition(
    task: string,
    tasks: string[],
    setIndex: (index: number) => void,
    setTasks: (tasks: string[]) => void
) {
    tasks.push(task)
    setIndex(tasks.length - 1)
    setTasks(tasks)
}