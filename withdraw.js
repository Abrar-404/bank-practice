

document.getElementById('btn-withdraw').addEventListener('click', function () {
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');
  const preWithdrawTotal = getElementValueById('withdraw-total');
  const newWithdrawTotal = preWithdrawTotal + newWithdrawAmount;

  setTextElementValueId('withdraw-total', newWithdrawTotal);
  const preBalanceTotal = getElementValueById('balance-total');
  const newBalanceTotal = preBalanceTotal - newWithdrawAmount;

  setTextElementValueId('balance-total', newBalanceTotal);
})