import React, { createElement, Fragment, CSSProperties, useState } from "react";
import { DynamicValue, ValueStatus, WebIcon, ActionValue, EditableValue } from "mendix";
import { normalizeProps, useMachine } from "@zag-js/react";
import * as pinInput from "@zag-js/pin-input";
import classNames from "classnames";
import { InputStyleEnum, InputTypeEnum, OtpModeEnum } from "typings/PinInputMendixProps";
import { Alert } from "./Alert";
import { updateInputValues } from "../utils/utils";
import Big from "big.js";

export interface PinInputProps {
    onChangeValue: (value: string) => void;
    pinInputAttribute?: EditableValue<string>;
    inputCount: DynamicValue<Big>;
    style: CSSProperties | undefined;
    pinClass: string;
    tabIndex: number | undefined;
    name: string;
    placeholder: DynamicValue<string> | undefined;
    inputType: InputTypeEnum;
    otpmode: OtpModeEnum;
    inputMask: DynamicValue<boolean>;
    dir: DynamicValue<string>;
    clearButtonEnabled: boolean;
    clearLabel: DynamicValue<string> | undefined;
    clearIcon: DynamicValue<WebIcon> | undefined;
    inputSize: InputStyleEnum;
    blurOnComplete: boolean;
    onChangeAction: ActionValue | undefined;
    onCompleteAction: ActionValue | undefined;
    inputCountException: DynamicValue<string> | undefined;
    inputNotDefinedException: DynamicValue<string> | undefined;
}

const PinInput: React.FunctionComponent<PinInputProps> = ({
    inputCount,
    pinClass,
    style,
    tabIndex,
    name,
    placeholder,
    inputType,
    otpmode,
    inputMask,
    dir,
    clearButtonEnabled,
    clearIcon,
    clearLabel,
    inputSize,
    onChangeValue,
    blurOnComplete,
    onChangeAction,
    onCompleteAction,
    pinInputAttribute,
    inputCountException,
    inputNotDefinedException
}: PinInputProps) => {
    const alertStyles: CSSProperties = {
        padding: "8px",
        margin: 0
    };

    const [pin, setPin] = useState<string[]>(updateInputValues(inputCount.value?.toNumber()));

    const updatePinAttributeValue = (value: string): boolean => {
        onChangeValue(value);
        return true;
    };

    const [state, send] = useMachine(
        pinInput.machine({
            id: name,
            type: inputType,
            otp: otpmode === "Yes",
            blurOnComplete,
            onValueChange(details: pinInput.ValueChangeDetails) {
                setPin(details.value);
                updatePinAttributeValue(details.valueAsString);
                onChangeAction?.execute();
            },
            onValueComplete(_details) {
                onCompleteAction?.execute();
                console.log("complete");
            }
        }),
        {
            context: {
                placeholder: placeholder?.value ? placeholder.value.toString() : "○",
                value: updateInputValues(
                    inputCount.value?.toNumber(),
                    pin,
                    pinInputAttribute?.value?.toString(),
                    inputType
                ),
                mask: inputMask.value ? inputMask.value : false,
                dir: dir.value === "rtl" ? "rtl" : "ltr",
                disabled: pinInputAttribute?.readOnly
            }
        }
    );

    const api = pinInput.connect(state, send, normalizeProps);

    const rootClasses = classNames("pin-input-root", pinClass);

    return (
        <div className={rootClasses} style={style} tabIndex={tabIndex}>
            {inputCount.value ? (
                inputCount.value.toNumber() > 0 ? (
                    <div {...api.rootProps} className="input-field-wrapper">
                        {inputCount.status === ValueStatus.Available ? (
                            Array.from<string>({ length: inputCount.value.toNumber() })
                                .fill("")
                                .map((_item: string, index: number) => (
                                    <input
                                        {...api.getInputProps({ index })}
                                        className={`pin-input ${inputSize} `}
                                        key={index}
                                        autoComplete={otpmode ? "one-time-code" : undefined}
                                    />
                                ))
                        ) : (
                            <Fragment></Fragment>
                        )}
                    </div>
                ) : (
                    <Alert styles={alertStyles}>
                        {inputCountException?.value || "Input count should be greater than 0."}
                    </Alert>
                )
            ) : (
                <Alert styles={alertStyles}>{inputNotDefinedException?.value || "Input count is not defined."}</Alert>
            )}
            {clearButtonEnabled ? (
                <button onClick={api.clearValue} className="pin-clear-btn" disabled={pinInputAttribute?.readOnly}>
                    {clearIcon?.value ? (
                        clearIcon?.value?.type === "glyph" || clearIcon?.value?.type === "icon" ? (
                            <span className={`${clearIcon.value.iconClass} icon-color`}></span>
                        ) : (
                            <img src={`${clearIcon?.value?.iconUrl}`}></img>
                        )
                    ) : (
                        <Fragment></Fragment>
                    )}
                    {clearLabel?.value ? clearLabel.value : <Fragment></Fragment>}
                </button>
            ) : (
                <Fragment></Fragment>
            )}
        </div>
    );
};

export default PinInput;
