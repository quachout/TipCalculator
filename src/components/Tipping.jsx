import React, {useState} from "react";
import InputBox from "./InputBox";
import calculateTotal from "./CalculateTotal";

function Tipping() {
<meta name="viewport" content="width=device-width, user-scalable=no" />
    const [subtotal, setSubtotal] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(0);
    const [taxAmount, setTaxAmount] = useState(0);
    const [calculatedTotal, setCalculatedTotal] = useState(0);
    const [calculateTipToWrite, setCalculatedTipToWrite] = useState(0);
    const [inputsValid, setInputsValid] = useState(false);      // checks if the input is valid
    const [buttonPressed, setButtonPressed] = useState(false);

    //function for calculating tip
    const handleCalculateTotal = () => {
        // console.log("Subtotal:", subtotal);
        // console.log("Tip Percentage:", tipPercentage);
        // console.log("Tax Amount:", taxAmount);
        // function that does the math for calulcating the
        setButtonPressed(true);
        const subtotalValue = subtotal.toString();
        const tipPercentageValue = tipPercentage.toString();
        const taxAmountValue = taxAmount.toString();
        if (
            isNaN(parseFloat(subtotalValue)) || isNaN(parseFloat(tipPercentageValue)) || isNaN(parseFloat(taxAmountValue))
        ){
            //inputs not valid
            setInputsValid(false);
            // return;
            
        }
        
        //inputs are valid
        setInputsValid(true);
        

        const totalAmount = calculateTotal(subtotalValue, tipPercentageValue, taxAmountValue);
        setCalculatedTotal(totalAmount);

        //math for how much tip to write for the server
        const writeTip = totalAmount - (parseFloat(subtotalValue.replace(/[^0-9.]/g, ''))+parseFloat(taxAmountValue.replace(/[^0-9.]/g, '')));
        setCalculatedTipToWrite(writeTip);
    }

    return (
      <div className="mt-[10%]">

        <InputBox 
        nameForInputBox="Subtotal"
        value = {subtotal}
        onChange={(value) => {
            setSubtotal(value);
            setInputsValid(true);
        }}
        placeholder = "the amount of just the itemized order"
        />
        <InputBox 
        nameForInputBox="Tip percentage %"
        value = {tipPercentage}
        onChange = {(value) => {
            setTipPercentage(value);
            setInputsValid(true);
        }}
        placeholder = "the percent you want to tip, e.g. 15%"
        />
        <InputBox 
        nameForInputBox="Amount you were taxed in $"
        value = {taxAmount}
        onChange = {(value) => {
            setTaxAmount(value);
            setInputsValid(true);
        }}
        placeholder = "how much did they say you were taxed"
        />

        <div className="flex flex-col items-center mt-4" >
            <button onClick={handleCalculateTotal}>Calculate Total</button>
        </div>
        
        {buttonPressed && inputsValid ? (
            <div className="mt-5">
                <p className="drop-shadow-xl">Total to pay: <span className="font-bold">${calculatedTotal.toFixed(2)}</span></p>
                <p className="drop-shadow-xl">Amount of tip you write: <span className="font-bold">${calculateTipToWrite.toFixed(2)}</span></p> 
            </div>
        ): (
            null
        )
        }


    
        {/* //so that the math works for when the server inputs it */}
      </div>
    );
  }
  
export default Tipping;