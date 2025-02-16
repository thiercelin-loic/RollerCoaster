export default function render(index: number, task: string) {
    return !index
        ? task === 'login' || task === 'save'
            ? 'text'
            : task === 'data'
                ? 'file'
                : 'number'
        : task === 'login'
            ? 'password'
            : task === 'save' || task === 'data'
            ? 'hidden'
            : 'number'
}