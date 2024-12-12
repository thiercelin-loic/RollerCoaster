import onClick from "./onClick"

interface nav {
    value?: string,
    icons?: React.JSX.Element[],
    setValue?: (name: string[]) => void,
    setIndex?: (index: number) => void,
    onClick?: onClick,
    undo?: onClick,
    redo?: onClick,
}

export default nav