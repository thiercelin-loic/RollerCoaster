export default function accept(
    value: string,
    works: string[],
    setAlert: (alert: string) => void,
    setBackground: (background: 'linear-gradient(#fff, #d3d3d3)') => void,
    setBorder: (border: string) => void,
    setIndex: (index: number) => void,
    setWorks: (works: string[]) => void
) {
    works.push(value)
    setAlert(`${value + ' has been saved successfully.'}`)
    setBackground('linear-gradient(#fff, #d3d3d3)')
    setBorder('none')
    setIndex(works.length)
    setWorks(works)
}