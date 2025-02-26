export default function accept(
    value: string,
    works: string[],
    setAlert: (alert: string) => void,
    setBackground: (background: string) => void,
    setIndex: (index: number) => void,
    setWorks: (works: string[]) => void
) {
    works.push(value)
    setAlert(`${value + ' has been treated well.'}`)
    setBackground('#4C516D')
    setIndex(works.length)
    setWorks(works)
}