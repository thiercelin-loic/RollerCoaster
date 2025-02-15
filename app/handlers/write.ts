export default function write(
    value: string,
    setAlert: (alert: string) => void,
    setBackground: (background: string) => void,
    setBorder: (border: string) => void,
    setValue: (value: string) => void
) {
    setAlert('')
    setBackground('linear-gradient(#fff, #d3d3d3)')
    setBorder('none')
    setValue(value)
}