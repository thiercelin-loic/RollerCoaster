export default function label(index: 0 | 1, task: string) {
    return index == 0
        ? task == 'login'
            ? 'Username'
            : task == 'save'
                ? 'Name'
                : task == 'data'
                    ? 'File'
                    : 'Number A'
        : task == 'login'
            ? 'Password'
            : 'Number B'
}