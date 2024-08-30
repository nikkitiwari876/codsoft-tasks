//CALCULATOR PROGRAM:-
// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculate() {
    let displayValue = document.getElementById('display').value;
    let result;
    try {
        result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
