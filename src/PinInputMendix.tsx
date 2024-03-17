import { createElement, ReactNode, Component, Fragment} from "react";
import { PinInputMendixContainerProps } from "../typings/PinInputMendixProps";
import "./ui/PinInputMendix.css";
import PinInput from "./components/PinInput";
import { Alert } from "./components/Alert";

export class PinInputMendix extends Component<PinInputMendixContainerProps> {
    
    private readonly onUpdateHandle = this.onUpdate.bind(this);
    
    private onUpdate(value: string): void {
        this.props.pinInputAttribute.setValue(value);
    }

  render() :ReactNode{

    const validationFeedback = this.props.pinInputAttribute.validation

    return (
        <Fragment>
            <PinInput 
                blurOnComplete={this.props.blurOnComplete}
                onChangeValue={this.onUpdateHandle}
                inputCount={this.props.inputCount}
                style={this.props.style}
                pinClass={this.props.class}
                tabIndex={this.props.tabIndex}
                name={this.props.name}
                placeholder={this.props.placeholder}
                inputType={this.props.inputType}
                otpmode={this.props.otpMode}
                inputMask={this.props.inputMask}
                dir={this.props.rtl}
                clearLabel={this.props.clearButtonLabel}
                clearIcon={this.props.clearButtonIcon}
                clearButtonEnabled={this.props.isClearButtonEnabled}
                inputSize={this.props.inputStyle}
                onChangeAction={this.props.onChangeAction}
                onCompleteAction={this.props.onCompleteAction}
                pinInputAttribute={this.props.pinInputAttribute}
                inputCountException={this.props.inputCountException}
                inputNotDefinedException={this.props.inputNotDefinedException}
            />

        <Alert >
            {validationFeedback}
        </Alert>

        </Fragment>
    )
    
  }
}