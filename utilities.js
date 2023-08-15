function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFiledValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFiledValueString);
  inputField.value = '';
  return inputFieldValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const Elementvalue = parseFloat(elementValueString);
  return Elementvalue;
}

function setTextElementValueId(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
