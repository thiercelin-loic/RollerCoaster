import onClick from "./onClick"

interface nav {
    value?: string,
    draws?: string[],
    setValue?: (name: string) => void,
    onClick?: onClick,
}

export default nav