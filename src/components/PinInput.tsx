import {createElement,Fragment} from 'react'
import {EditableValue, DynamicValue, ValueStatus} from 'mendix'
import { normalizeProps, useMachine } from '@zag-js/react';
import * as pinInput from '@zag-js/pin-input'

interface PinInputProps{
    pinInputAttribute:EditableValue<string>,
    inputCount : DynamicValue<Big>
}

function PinInput({ inputCount }:PinInputProps) {
  const [state, send] = useMachine(pinInput.machine({ id: "1" }))
  
  const api = pinInput.connect(state, send, normalizeProps)

  return (
    <div>
      <div {...api.rootProps}>
      { inputCount.status == ValueStatus.Available ? Array.from<string>({length:inputCount.value.toNumber()}).fill("").map((_item:string,index:number)=>  <input {...api.getInputProps({ index: index })} />) :<Fragment></Fragment>}
        {/* <input {...api.getInputProps({ index: 1 })} />
        <input {...api.getInputProps({ index: 2 })} /> */}
      </div>
      <button onClick={api.clearValue}>Clear</button>
    </div>
  )
}

export default PinInput