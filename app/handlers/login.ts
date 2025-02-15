export default function login(
    tasks: string[],
    setIndex: (index: number) => void,
    setTasks: (tasks: string[]) => void
) {
    tasks.push('login')
    setTasks(tasks)
    setIndex(tasks.length - 1)
}