import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { PinInputMendixContainerProps } from "../typings/PinInputMendixProps";

import "./ui/PinInputMendix.css";

export function PinInputMendix({ sampleText }: PinInputMendixContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
