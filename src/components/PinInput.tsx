import {createElement,Fragment, CSSProperties} from 'react'
import {EditableValue, DynamicValue, ValueStatus, WebIcon} from 'mendix'
import { normalizeProps, useMachine } from '@zag-js/react';
import * as pinInput from '@zag-js/pin-input'
import classNames from 'classnames';
import { InputTypeEnum, OtpModeEnum } from 'typings/PinInputMendixProps';


interface PinInputProps{
    pinInputAttribute:EditableValue<string>,
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
    clearLabel : DynamicValue<string> ,
    clearIcon : DynamicValue<WebIcon> | undefined
}


function PinInput({ inputCount, pinClass, style, tabIndex, name, placeholder, inputType, otpmode, inputMask, dir, clearIcon, clearLabel}:PinInputProps) {
  const [state, send] = useMachine(
    pinInput.machine({
       id: name,
       placeholder: placeholder.value?.toString(),
       type:inputType,
       otp: otpmode === "Yes" ? true : false,
       mask : inputMask.value,
       dir : dir.value ? "rtl" : "ltr",
       
      })
    )
  
  const api = pinInput.connect(state, send, normalizeProps)
// api.setValue()
  const rootClasses = classNames("pin-input-root",pinClass)

  return (
    <div className={rootClasses} style={style} tabIndex={tabIndex}>
      <div {...api.rootProps} className='input-field-wrapper'>
        { 
          inputCount.status == ValueStatus.Available ? 
            Array.from<string>({length:inputCount.value.toNumber()})
              .fill("")
              .map((_item:string,index:number)=>  <input {...api.getInputProps({ index: index })} className='pin-input md' />)
          :<Fragment></Fragment>
        }
      </div>
      <button onClick={api.clearValue}>
       {
        clearIcon?.value ? 
        clearIcon?.value?.type == 'glyph' || clearIcon?.value?.type == 'icon'  ? <span className={`${clearIcon.value.iconClass}`}></span> : <img src={`${clearIcon?.value?.iconUrl}`}></img>
        : <Fragment></Fragment>
       }
       {
        clearLabel.value ? clearLabel.value : <Fragment></Fragment>
       }
      </button>
    </div>
  )
}

export default PinInput