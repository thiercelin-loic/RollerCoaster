export default function download(value: string) {
    const link = document.createElement('a')
    const blob = new Blob()

    link.href = window.URL.createObjectURL(blob)
    link.setAttribute('download', `${value}.json`)
    link.click()
    
    document.body.appendChild(link)
}