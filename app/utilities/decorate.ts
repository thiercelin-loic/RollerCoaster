export default function decorate(task: string) {
    return task == 'login' ? 'password' : 'hidden'
}