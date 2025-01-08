export default function login(
    tasks: string[],
    setTasks: (tasks: string[]) => void,
    setIndex: (index: number) => void
) {
    tasks.push('login')
    setTasks(tasks)
    setIndex(tasks.length - 1)
}