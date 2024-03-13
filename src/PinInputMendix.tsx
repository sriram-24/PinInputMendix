import { ReactElement, createElement } from "react";


import { PinInputMendixContainerProps } from "../typings/PinInputMendixProps";

import "./ui/PinInputMendix.css";
import PinInput from "./components/PinInput";


export function PinInputMendix({ pinInputAttribute, inputCount }: PinInputMendixContainerProps): ReactElement {
    return <PinInput pinInputAttribute={pinInputAttribute} inputCount={inputCount} />
}
