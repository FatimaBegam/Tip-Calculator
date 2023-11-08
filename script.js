const billAmountInput = document.getElementById("bill-amount");
const tipPercentageSelect = document.getElementById("tip-percentage");
const calculateButton = document.getElementById("calculate-button");
const tipAmountDisplay = document.getElementById("tip-amount");
const totalBillDisplay = document.getElementById("total-bill");

calculateButton.addEventListener("click", () => {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageSelect.value);
  if (!isNaN(billAmount) && !isNaN(tipPercentage)) {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalBill = billAmount + tipAmount;
    tipAmountDisplay.textContent = tipAmount.toFixed(2);
    totalBillDisplay.textContent = totalBill.toFixed(2);
  }
});
