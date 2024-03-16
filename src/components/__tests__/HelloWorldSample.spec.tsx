import { createElement } from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { ValueStatus } from "mendix";
import PinInput, { PinInputProps } from "../PinInput";
import Big from "big.js";
import { updateInputValues } from "../../utils/utils";
// import { Option, NumberFormatter, DateTimeFormatter, SimpleFormatter } from "mendix";



describe("HelloWorldSample", () => {
    const createHelloWorld = (props: PinInputProps): ShallowWrapper => shallow(<PinInput {...props} />);

    it("should render the structure correctly", () => {
        const helloWorldProps: PinInputProps = {
            onChangeValue: function (_value: string): void {
                throw new Error("Function not implemented.");
            },
            
            inputCount: {
                status: ValueStatus.Available,
                value: new Big(1)
            },
            style: undefined,
            pinClass: "",
            tabIndex: undefined,
            name: "",
            placeholder: undefined,
            inputType: "numeric",
            otpmode: "Yes",
            inputMask: {
                status: ValueStatus.Unavailable,
                value: undefined
            },
            dir: {
                status: ValueStatus.Unavailable,
                value: undefined
            },
            clearButtonEnabled: false,
            clearLabel: undefined,
            clearIcon: undefined,
            inputSize: "xs",
            blurOnComplete: false,
            onChangeAction: undefined,
            onCompleteAction: undefined
        };

        const helloWorld = createHelloWorld(helloWorldProps);
        // const ren = render(<PinInput {...helloWorldProps} />)
        console.log(helloWorld.html())
        

        expect(helloWorld.containsMatchingElement(
            <input data-scope="pin-input" data-part="input" dir="ltr" id="pin-input::0" data-ownedby="pin-input:" aria-label="pin code 1 of 1" inputMode="numeric" type="tel" autoCapitalize="none" autoComplete="one-time-code" placeholder="○" className="pin-input xs " value=""/>
        )  ).toEqual(true);

    
    });

    it("should return numeric array", ()=>{

        expect(updateInputValues(1,[],"23","numeric")).toEqual(["2"])

    })
    it("should not return alphabetic array",()=>{
        expect(updateInputValues(1,[],"23","alphabetic")).toEqual([""])
    })
    it("should return alphabetic array",()=>{
        expect(updateInputValues(1,[],"as","alphabetic")).toEqual(["a"])
    })
    it("should return alphanumeric array",()=>{
        expect(updateInputValues(4,[],"23aa","alphanumeric")).toEqual(["2","3","a","a"])
    })
    it("should return string array with empty values",()=>{
        expect(updateInputValues(0,[],undefined,undefined)).toEqual([])
    })

});
