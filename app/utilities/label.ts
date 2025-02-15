export default function label(position: 0 | 1, task: string) {
    return position == 0
        ? task == 'login' ? 'Username' : 'Name'
        : task == 'login' ? 'Password' : 'Location'
}