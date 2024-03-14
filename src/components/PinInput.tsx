import {createElement,Fragment, CSSProperties} from 'react'
import { DynamicValue, ValueStatus, WebIcon, ActionValue} from 'mendix'
import { normalizeProps, useMachine } from '@zag-js/react';
import * as pinInput from '@zag-js/pin-input'
import classNames from 'classnames';
import { InputStyleEnum, InputTypeEnum, OtpModeEnum } from 'typings/PinInputMendixProps';




export interface PinInputProps{
    onChangeValue:(value : string) => void,
    inputCount : DynamicValue<Big>,
    style:CSSProperties | undefined,
    pinClass:string,
    tabIndex: number | undefined,
    name: string,
    placeholder:DynamicValue<string>,
    inputType : InputTypeEnum,
    otpmode : OtpModeEnum,
    inputMask: DynamicValue<boolean>
    dir:DynamicValue<boolean>,
    clearButtonEnabled : boolean
    clearLabel : DynamicValue<string> | undefined ,
    clearIcon : DynamicValue<WebIcon> | undefined,
    inputSize : InputStyleEnum,
    blurOnComplete : boolean,
    onChangeAction: ActionValue | undefined,
    onCompleteAction: ActionValue | undefined
}


const PinInput = ({ inputCount, pinClass, style, tabIndex, name, placeholder, inputType, otpmode, inputMask, dir, clearIcon, clearLabel, inputSize, onChangeValue, blurOnComplete, onChangeAction,onCompleteAction }:PinInputProps) =>{
  
  const updatePinAttributeValue = (value: string) => {
    onChangeValue(value)
  }
  
  const [state, send] = useMachine(
    pinInput.machine({
       id: name,
       placeholder: placeholder.value?.toString(),
       type:inputType,
       otp: otpmode === "Yes" ? true : false,
       mask : inputMask.value,
       dir : dir.value ? "rtl" : "ltr",
      blurOnComplete: blurOnComplete,
       onValueChange(details : pinInput.ValueChangeDetails) {
          updatePinAttributeValue(details.valueAsString)
          onChangeAction?.execute()
       },
       onValueComplete(_details) {
         onCompleteAction?.execute()
        console.log("complete")
       },
       
      })
    )
  
  const api = pinInput.connect(state, send, normalizeProps)

  const rootClasses = classNames("pin-input-root",pinClass)

  return (
    <div className={rootClasses} style={style} tabIndex={tabIndex}>
      <div {...api.rootProps} className='input-field-wrapper'>
        { 
          inputCount.status == ValueStatus.Available ? 
            Array.from<string>({length:inputCount.value.toNumber()})
              .fill("")
              .map((_item:string,index:number)=>  <input {...api.getInputProps({ index: index })} className={`pin-input ${inputSize} `} />)
          :<Fragment></Fragment>
        }
      </div>
      <button onClick={api.clearValue} className='pin-clear-btn'>
       {
        clearIcon?.value ? 
        clearIcon?.value?.type == 'glyph' || clearIcon?.value?.type == 'icon'  ? <span className={`${clearIcon.value.iconClass}`}></span> : <img src={`${clearIcon?.value?.iconUrl}`}></img>
        : <Fragment></Fragment>
       }
       {
        clearLabel?.value ? clearLabel.value : <Fragment></Fragment>
       }
      </button>
    </div>
  )
}

export default PinInput