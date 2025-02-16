export default function label(position: 0 | 1, task: string) {
    return position == 0
        ? task == 'login' ? 'Username'
            : task == 'save' ? 'Name' : 'File'
        : task == 'login' ? 'Password' : 'Location'
}