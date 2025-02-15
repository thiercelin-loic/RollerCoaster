export default function reader(
    outputs: string[],
    position: 0 | 1,
    task: string
) {
    return position == 0
        ? task == 'login'
            ? outputs[3]
            : outputs[1]
        : task == 'login'
            ? outputs[2]
            : outputs[0]
}