export default function write(
    value: string,
    setAlert: (alert: string) => void,
    setBackground: (border: string) => void,
    setValue: (value: string) => void
) {
    setAlert('')
    setBackground('#4C516D')
    setValue(value)
}