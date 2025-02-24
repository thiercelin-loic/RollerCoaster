export default function write(
    value: string,
    setAlert: (alert: string) => void,
    setBorder: (border: string) => void,
    setValue: (value: string) => void
) {
    setAlert('')
    setBorder('none')
    setValue(value)
}