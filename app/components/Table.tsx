import table from "../types/table"

export default function Table({ body }: table) {
    return <table>
        <tbody>{body}</tbody>
    </table>
}