export default function render(index: number, task: string) {
    return !index
        ? task === 'login' || task === 'save'
            ? 'text'
            : 'file'
        : task === 'login'
            ? 'password'
            : 'hidden'
}