export default function appoint(task: string) {
    return task == 'login'
        ? 'Login'
        : task == 'save'
            ? 'Save this file'
            : task == 'data'
                ? 'Insert data'
                : 'Insert a function'
}