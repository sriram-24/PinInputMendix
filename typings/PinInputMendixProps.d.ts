/**
 * This file was generated from PinInputMendix.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue, WebIcon } from "mendix";
import { Big } from "big.js";

export type InputTypeEnum = "numeric" | "alphanumeric" | "alphabetic";

export type OtpModeEnum = "Yes" | "No";

export interface PinInputMendixContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    pinInputAttribute: EditableValue<string>;
    inputCount: DynamicValue<Big>;
    placeholder: DynamicValue<string>;
    inputType: InputTypeEnum;
    otpMode: OtpModeEnum;
    inputMask: DynamicValue<boolean>;
    rtl: DynamicValue<boolean>;
    isClearButtonEnabled: boolean;
    clearButtonLabel: DynamicValue<string>;
    clearButtonIcon?: DynamicValue<WebIcon>;
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
    otpMode: OtpModeEnum;
    inputMask: string;
    rtl: string;
    isClearButtonEnabled: boolean;
    clearButtonLabel: string;
    clearButtonIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
}
