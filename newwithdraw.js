document.getElementById('btn-withdraw').addEventListener('click', function () {
  const newWithdrawAmount = inputValue('withdraw-field');
  const preWithdrawTotal = elementValue('withdraw-total');
  const newWithdrawTotal = newWithdrawAmount + preWithdrawTotal;

  setElementValue('withdraw-total', newWithdrawTotal);

  const newBalanceAmount = elementValue('balance-total');
  const newBalanceTotal = newBalanceAmount - newWithdrawTotal;
  setElementValue('balance-total', newBalanceTotal);
})