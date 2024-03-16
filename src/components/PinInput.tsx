import {createElement,Fragment, CSSProperties, useState} from 'react'
import { DynamicValue, ValueStatus, WebIcon, ActionValue, EditableValue} from 'mendix'
import { normalizeProps, useMachine } from '@zag-js/react';
import * as pinInput from '@zag-js/pin-input'
import classNames from 'classnames';
import { InputStyleEnum, InputTypeEnum, OtpModeEnum } from 'typings/PinInputMendixProps';
import { Alert } from './Alert';

export interface PinInputProps{
    onChangeValue:(value : string) => void,
    pinInputAttribute : EditableValue<string>,
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

const PinInput = (
  { 
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
	pinInputAttribute 
}:PinInputProps
  
  ) =>{
  
	const alertStyles : CSSProperties ={
		padding:"8px",
		margin:0
	} 
  const updateInputValues = (
	count : number | undefined, 
	defaulValues? : Array<string>, 
	defaultString? : string | undefined
	) : Array<string>  => {
    const vvalueArray =  Array.from<string>({length:count ? count : 0}).fill("")
    
    if(defaultString){
      const arra = defaultString.split("")
      console.log("edi",arra);
      
      arra.forEach((item,index)=> vvalueArray[index] = item)
      return vvalueArray
    }
    if(defaulValues){
      defaulValues.forEach((item, index) => vvalueArray[index] = item)
     return vvalueArray
   }
    return vvalueArray

  }

  const [pin, setPin] = useState<string[]>(updateInputValues(inputCount.value?.toNumber()))

  const updatePinAttributeValue = (value: string) => {
    onChangeValue(value)
  }
  
  const [state, send] = useMachine(
    pinInput.machine({
       id: name,
       type:inputType,
       otp: otpmode === "Yes" ? true : false,
      blurOnComplete: blurOnComplete,
       onValueChange(details : pinInput.ValueChangeDetails) {
          setPin(details.value)
          updatePinAttributeValue(details.valueAsString)
          onChangeAction?.execute()
       },
       onValueComplete(_details) {
         onCompleteAction?.execute()
        console.log("complete")
       },
       
      }),{
        context:{
          placeholder: placeholder.value ? placeholder.value.toString() : "○" ,
          value: updateInputValues(inputCount.value?.toNumber(), pin, pinInputAttribute.value?.toString()),
          mask : inputMask.value,
          dir : dir.value ? "rtl" : "ltr",
        }
      }
    )
  
  const api = pinInput.connect(state, send, normalizeProps)

  const rootClasses = classNames("pin-input-root",pinClass)

  return (
    <div className={rootClasses} style={style} tabIndex={tabIndex}>
      {
		inputCount.value ? 
			inputCount.value.toNumber() > 0 ?
				<div {...api.rootProps} className='input-field-wrapper'>
					{ 
					inputCount.status == ValueStatus.Available ? 
						Array.from<string>({length:inputCount.value.toNumber()})
						.fill("")
						.map((_item:string,index:number)=>  
						<input {...api.getInputProps({ index: index })} className={`pin-input ${inputSize} `} />
						)
					:<Fragment></Fragment>
					}
				</div>
			: <Alert styles={alertStyles}>Input count should be greater than 0.</Alert>
		:<Alert styles={alertStyles}>Input count is not defined.</Alert>
	  }
      {
		clearButtonEnabled ? 
			<button onClick={api.clearValue} className='pin-clear-btn'>
				{
					clearIcon?.value ? 
						clearIcon?.value?.type == 'glyph' || clearIcon?.value?.type == 'icon'  ?
							<span className={`${clearIcon.value.iconClass}`}></span> 
						:	<img src={`${clearIcon?.value?.iconUrl}`}></img>
					: <Fragment></Fragment>
				}
				{
					clearLabel?.value ? 
						clearLabel.value 
					: <Fragment></Fragment>
				}
			</button>
		: <Fragment></Fragment>
	  }
      
    </div>
  )
}

export default PinInput