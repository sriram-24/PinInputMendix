# Pin Input
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

Pin Input is a widget used for entering sequence of inputs in a separate input boxes. This widget will provide a modern look and feel for entering the OTP or PIN inputs instead of using a plain input text widget. It is built on top of a [@zagjs/pin-input](https://zagjs.com/components/react/pin-input) react component.

## Features

- Modern look and feel.
- Secure input with input mask.
- Customizable input count.
- Onchange and Oncomplete events help to trigger mendix actions.
- RTL Support.
- Configurable labels being displayed in UI. 
- Multi language support for labels.

## Installing
Download the widget from mendix marketplace (**Recommended**)
or
[Build from source](https://github.com/sriram-24/PinInputMendix)

## Usage
The usage of the widget is split into tabs. Each tab and its configurations were described by the tab titles.

#### General
- `Datasource Attribue` - Choose an attribute to store the entered pin values. Must be a string.
- `Input Count` - Number of input fields displayed for the PIN. Must be an Integer. Default : 3
- `Placeholder` - Placeholder text to display on each input field. Must be a string. Default : ○ 
- `Input Type` - Type of input is allowed for the user to enter in the input fields.  Default : numeric
- `Input Mask` - Masks the characters entered by the user. Must a boolean. Default : false

#### Advanced 
- `OTP Mode` - Autocomplete suggestion for OTP in mobile devices. Must be Yes/No. Default : No
- `Dir` - Direction of the input, whether from left to right or right to left. Must be string("rtl" or "ltr"). Default:"ltr" 
- `Blur on Complete` - Exits focus of the input field after all the input values are filled. Must be boolean. Default : false

- `Clear button enabled?` - Enable/Disable clear button to clear all the inputs entered by the  user. Must be Yes/No. Default : No
- `Input Size` - Size of each input fields. Choosen between `xs`, `sm`, `md`, `lg`. Default: md
 ##### Restriction texts 
- `Input Count` - Exception string to display when the count is less than or equal to 0.
- `Input Count (empty)` - Exception string to display when the count is empty.
#### Clear button (Enabled by `Clear button enabled?`)
If the clear button is enabled any one of the below option is required.
- `Label` - Label to display inside the clear button. Must be a string.
- `Icon` - Icon to display inside the clear button.
#### Events
- `On Change` - Event triggered when each input field is changed.
- `On Complete` - Event triggered when all the input fields are filled. It is triggered only at the last input field.

## Issues, suggestions and feature requests

Found an issue, suggestions or feature request? [Raise here](https://github.com/sriram-24/PinInputMendix/issues)

## Demo
[Click here](https://pininputtest-sandbox.mxapps.io/)

## Screenshots
![General Configuration](https://github.com/sriram-24/PinInputMendix/blob/main/screenshots/editor_1.png?raw=true)

![Advanced Configuration](https://github.com/sriram-24/PinInputMendix/blob/main/screenshots/editor_2.png?raw=true)

![Preview](https://github.com/sriram-24/PinInputMendix/blob/main/screenshots/preview.png?raw=true)