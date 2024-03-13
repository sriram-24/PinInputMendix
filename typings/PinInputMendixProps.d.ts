/**
 * This file was generated from PinInputMendix.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface PinInputMendixContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    pinInputAttribute: EditableValue<string>;
    inputCount: DynamicValue<Big>;
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
}
