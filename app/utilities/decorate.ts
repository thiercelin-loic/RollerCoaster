export default function render(index: number, task: string) {
    return !index
        ? task === 'login' || task === 'save' || task === 'script'
            ? 'text'
            : task === 'data'
                ? 'file'
                : task == 'function'
                    ? 'number'
                    : 'hidden'
        : task === 'login'
            ? 'password'
            : task === 'save' || task === 'data'
                ? 'hidden'
                : task == 'function'
                    ? 'number'
                    : 'hidden'
}