import { ChangeEvent, ChangeEventHandler } from "react";

export default interface select {
    category: string,
    options: string[],
    onChange?: ChangeEventHandler<HTMLSelectElement>
}