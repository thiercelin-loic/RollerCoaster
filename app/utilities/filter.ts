export default function filter(value: string) {
    return value.match(/[a-zA-Z]+/g)
}