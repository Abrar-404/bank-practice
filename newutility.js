function inputValue(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldString = inputField.value;
  const inputFieldTotal = parseFloat(inputFieldString);
  inputField.value = '';
  return inputFieldTotal;
}

function elementValue(ElementId) {
  const elementField = document.getElementById(ElementId);
  const elementString = elementField.innerText;
  const elementTotal = parseFloat(elementString);
  return elementTotal;
}

function setElementValue(elementId, newValue) {
  const newElement = document.getElementById(elementId);
  newElement.innerText = newValue;
}