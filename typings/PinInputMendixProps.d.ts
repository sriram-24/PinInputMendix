/**
 * This file was generated from PinInputMendix.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, WebIcon } from "mendix";
import { Big } from "big.js";

export type InputTypeEnum = "numeric" | "alphanumeric" | "alphabetic";

export type OtpModeEnum = "Yes" | "No";

export type InputStyleEnum = "xs" | "sm" | "md" | "lg";

export interface PinInputMendixContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    pinInputAttribute: EditableValue<string>;
    inputCount: DynamicValue<Big>;
    placeholder?: DynamicValue<string>;
    inputType: InputTypeEnum;
    inputMask: DynamicValue<boolean>;
    otpMode: OtpModeEnum;
    rtl: DynamicValue<string>;
    blurOnComplete: boolean;
    isClearButtonEnabled: boolean;
    inputStyle: InputStyleEnum;
    inputCountException?: DynamicValue<string>;
    inputNotDefinedException?: DynamicValue<string>;
    clearButtonLabel?: DynamicValue<string>;
    clearButtonIcon?: DynamicValue<WebIcon>;
    onChangeAction?: ActionValue;
    onCompleteAction?: ActionValue;
}

export interface PinInputMendixPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    pinInputAttribute: string;
    inputCount: string;
    placeholder: string;
    inputType: InputTypeEnum;
    inputMask: string;
    otpMode: OtpModeEnum;
    rtl: string;
    blurOnComplete: boolean;
    isClearButtonEnabled: boolean;
    inputStyle: InputStyleEnum;
    inputCountException: string;
    inputNotDefinedException: string;
    clearButtonLabel: string;
    clearButtonIcon:
        | { type: "glyph"; iconClass: string }
        | { type: "image"; imageUrl: string; iconUrl: string }
        | { type: "icon"; iconClass: string }
        | undefined;
    onChangeAction: {} | null;
    onCompleteAction: {} | null;
}
