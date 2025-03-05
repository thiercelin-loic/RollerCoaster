export default function download(file: string, value: string) {
    const link = document.createElement('a')
    const blob = new Blob([value])

    link.href = window.URL.createObjectURL(blob)
    link.setAttribute('download', `${file}.rc`)
    link.click()

    document.body.appendChild(link)
}