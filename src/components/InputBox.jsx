// import React, {useState} from "react";

function InputBox(props) {

    return (
    <div>
    <label>
        {props.nameForInputBox}
    </label>
    <input 
        type="text" 
        // inputMode="numeric"
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
    />

    </div>
    );
  }
  
export default InputBox;