export default function reject(
    setAlert: (alert: string) => void,
    setBorder: (border: string) => void,
    setValue: (value: string) => void
) {
    setAlert("Fields doesn't started by special characters")
    setBorder('red solid 1px')
    setValue('')
}
