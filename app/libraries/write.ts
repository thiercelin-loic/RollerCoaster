export default function write(
    value: string,
    setValue: (value: string) => void,
    setBorder: (border: string) => void,
    setBackground: (background: string) => void,
    setAlert: (alert: string) => void
) {
    setValue(value)
    setBorder('none')
    setBackground('linear-gradient(#fff, #d3d3d3)')
    setAlert('')
}