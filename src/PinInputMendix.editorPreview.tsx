import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { PinInputMendixPreviewProps } from "../typings/PinInputMendixProps";

export function preview({ sampleText }: PinInputMendixPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/PinInputMendix.css");
}
