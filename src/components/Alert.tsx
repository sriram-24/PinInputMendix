import { FunctionComponent, createElement, CSSProperties } from "react";
import classNames from "classnames";
export interface AlertProps {
    alertStyle?:  "danger";
    children:any,
    styles?: CSSProperties 
}
export const Alert: FunctionComponent<AlertProps> = ({ alertStyle, children, styles }) =>
    children ? (
        <div className={classNames(`alert alert-${alertStyle} mx-validation-message`)} style={styles}>
            {children}
        </div>
    ) : null;
Alert.displayName = "Alert";
Alert.defaultProps = { alertStyle: "danger" };