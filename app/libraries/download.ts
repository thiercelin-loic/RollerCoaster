import { createHash } from 'crypto'

export default function download(file: string, value: string) {
    const link = document.createElement('a')
    const hash = createHash('sha256')
        .update(value)
        .digest('hex')
        
    const blob = new Blob([hash])

    link.href = window.URL.createObjectURL(blob)
    link.setAttribute('download', `${file}.rc`)
    link.click()

    document.body.appendChild(link)
}