# Tip Calculator

This is the only [Tip Calculator](https://quachout.github.io/TipCalculator/) you need when you go out to restaurants. It calculates the amount of tip and total you need to add by using the subtotal and not the subtotal with tax.

### Why do you need this?

At some restaurants, they generate the tip using the subtotal + tax, which means you're tipping based on the tax in addition to the items you ordered. With the Tip Calculator, your tip amount will be generated using the subtotal and the tax will be added afterwards.

### How to use?

1. Simply enter the subtotal shown on the receipt.
2. Enter the tip amount you want to provide.
3. Enter the amount of tax that is shown on your receipt.
4. Click **Calculate Total**
5. Now write the total that is displayed
6. Write the amount of tip calculated, you need to write the amount of tip since that is how the servers/waiters will input your tip into their system.

### How is the "Total to pay" calculated?

"Total to pay" is calculated by using this formula

Total to pay = `subtotal*(1+(tip/100)) + tax`

### How is "Amount of tip you write" calculated?

"Amount of tip you write" is calculated by taking the total (from above) and subtracting it from the subtotal plus the tax

Amount of tip you write = `total - (subtotal + tax)`

