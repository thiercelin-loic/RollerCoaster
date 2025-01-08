export default function accept(
    value: string,
    works: string[],
    setWorks: (works: string[]) => void,
    setAlert: (alert: string) => void,
    setIndex: (index: number) => void,
    setBackground: (background: string) => void,
    setBorder: (border: string) => void
) {
    works.push(value)
    setWorks(works)
    setAlert(`${value + ' has been saved successfully.'}`)
    setIndex(works.length)
    setBackground('linear-gradient(#fff, #d3d3d3)')
    setBorder('none')
}