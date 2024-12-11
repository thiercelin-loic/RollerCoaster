import onClick from "./onClick"

interface nav {
    value?: string[],
    draws?: string[],
    index?: number,
    setValue?: (name: string[]) => void,
    setIndex?: (index: number) => void,
    onClick?: onClick,
    undo?: onClick,
    redo?: onClick,
}

export default nav