import { ReactElement, createElement } from "react";


import { PinInputMendixContainerProps } from "../typings/PinInputMendixProps";

import "./ui/PinInputMendix.css";
import PinInput from "./components/PinInput";


export function PinInputMendix({ pinInputAttribute, inputCount, class: classNames, style, tabIndex, name, placeholder, inputType, otpMode, inputMask, rtl, clearButtonLabel, clearButtonIcon, isClearButtonEnabled}: PinInputMendixContainerProps): ReactElement {
    return <PinInput 
                pinInputAttribute={pinInputAttribute}
                inputCount={inputCount}
                style={style}
                pinClass={classNames}
                tabIndex={tabIndex}
                name={name}
                placeholder={placeholder}
                inputType={inputType}
                otpmode={otpMode}
                inputMask={inputMask}
                dir={rtl}
                clearLabel={clearButtonLabel}
                clearIcon={clearButtonIcon}
                clearButtonEnabled={isClearButtonEnabled}
            />
}
