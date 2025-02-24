export default function accept(
    value: string,
    works: string[],
    setAlert: (alert: string) => void,
    setBorder: (border: string) => void,
    setIndex: (index: number) => void,
    setWorks: (works: string[]) => void
) {
    works.push(value)
    setAlert(`${value + ' has been saved successfully.'}`)
    setBorder('none')
    setIndex(works.length)
    setWorks(works)
}