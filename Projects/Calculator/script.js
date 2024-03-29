const display = document.getElementById("display");
const keys = document.getElementById("keys");
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(input) {
    display.value = "";
}
function calculate(input) {
    display.value = eval(display.value);
}
function deleteLast(input) {
    display.value = display.value.substring(0, display.value.length - 1);
}