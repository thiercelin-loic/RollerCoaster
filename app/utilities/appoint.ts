export default function appoint(task: string) {
    return task == 'login'
        ? 'Login'
        : task == 'save'
            ? 'Save this file'
            : 'Insert Data'
}