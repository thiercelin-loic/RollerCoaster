import { ChangeEventHandler } from "react";

export default interface table {
    column: any,
    data: any[][],
    onChange: ChangeEventHandler,
    row: any,
    setData: (data: any[][]) => void,
    value: any
}