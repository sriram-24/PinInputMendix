import { ReactElement, createElement, Fragment } from "react";
import * as pinInput from "@zag-js/pin-input";
import { PinInputMendixPreviewProps } from "../typings/PinInputMendixProps";
import { normalizeProps, useMachine } from "@zag-js/react";
import classNames from "classnames";

export function Preview({
    class: pinclass,
    inputStyle,
    clearButtonLabel,
    isClearButtonEnabled
}: PinInputMendixPreviewProps): ReactElement {
    const [state, send] = useMachine(
        pinInput.machine({
            id: "editor-1",
            placeholder: "○"
        })
    );
    const inputCount = 3;
    const api = pinInput.connect(state, send, normalizeProps);

    const rootClasses = classNames("pin-input-root", pinclass);

    return (
        <div className={rootClasses}>
            <div {...api.rootProps} className="input-field-wrapper">
                {Array.from<string>({ length: inputCount })
                    .fill("")
                    .map((_item: string, index: number) => (
                        <input {...api.getInputProps({ index })} className={`pin-input ${inputStyle} `} key={index} />
                    ))}
            </div>
            {isClearButtonEnabled ? (
                <button onClick={api.clearValue} className="pin-clear-btn">
                    {clearButtonLabel}
                </button>
            ) : (
                <Fragment></Fragment>
            )}
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/PinInputMendix.css");
}
