import { ReactEventHandler } from "react";

export interface Input {
    type?: string,
    placeholder?: string,
    value?: string,
    counter?: number,
    onChange?: ReactEventHandler,
}