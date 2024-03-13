import { ReactElement, createElement } from "react";

import { PinInputMendixPreviewProps } from "../typings/PinInputMendixProps";

export function preview({  }: PinInputMendixPreviewProps): ReactElement {
    return <div></div>;
}

export function getPreviewCss(): string {
    return require("./ui/PinInputMendix.css");
}
