function calculateTotal(subtotal, tipPercentage, taxAmount){
    // strip everything but the numbers and decimals from input 
    console.log("before subs",subtotal)
    const subtotalValue = parseFloat(subtotal.replace(/[^0-9.]/g, ''));
    console.log("before subs",subtotalValue)
    const tipPercentageValue = parseFloat(tipPercentage.replace(/[^0-9.]/g, ''));
    const taxAmountValue = parseFloat(taxAmount.replace(/[^0-9.]/g, ''));
    const total = (subtotalValue * (1+(tipPercentageValue/100))) + taxAmountValue
    return total;
}

export default calculateTotal;