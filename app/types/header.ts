import React, { ChangeEventHandler, FormEventHandler } from "react"

export default interface header {
    alert?: string,
    background?: string,
    className?: string,
    icons?: React.JSX.Element[],
    labels?: React.JSX.Element[],
    input?: string,
    title?: string,
    value?: string,

    onChange?: ChangeEventHandler<HTMLInputElement>,
    onClick?: React.MouseEventHandler
    onSubmit?: FormEventHandler<HTMLFormElement>,
}