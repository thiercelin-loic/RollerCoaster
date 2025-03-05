import table from '../types/table'

export default function Table({ body }: table) {
    return <table>
        <p className='table'>Table</p>
        <tbody>{body}</tbody>
    </table>
}