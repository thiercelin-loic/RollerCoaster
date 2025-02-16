export default function appoint(task: string) {
    return task == 'login'
        ? 'Login'
        : task == 'save'
            ? 'Save this file'
            : task == 'data'
                ? 'Insert data'
                : task == 'function'
                ? 'Insert a function'
                : task == 'script'
                ? 'Insert a script'
                : 'Charts visualisations'
}