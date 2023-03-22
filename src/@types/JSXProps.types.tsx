import { ChangeEvent } from "react";

export interface stepperFromEntry {
    id: string, title: string, type?: string, blurCheck?: boolean, onBlur?: () => {}, value: string, onChange?: (e:ChangeEvent)=>void
}