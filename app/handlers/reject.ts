export default function reject(
    setAlert: (alert: string) => void,
    setBackground: (background: string) => void,
    setValue: (value: string) => void
) {
    setAlert("An error has occurred")
    setBackground('lightgray')
    setValue('')
}
