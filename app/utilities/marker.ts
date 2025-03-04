export default function marker(
    inputs: React.Dispatch<React.SetStateAction<string>>[],
    position: 0 | 1 | undefined,
    task: string
) {
    return position == 0
        ? task == 'login'
            ? inputs[3]
            : inputs[1]
        : task == 'login'
            ? inputs[2]
            : inputs[0]
}