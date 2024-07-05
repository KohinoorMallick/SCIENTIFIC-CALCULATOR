function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    let result = display.value;
    
    // Replace mathematical symbols with JavaScript equivalents
    result = result.replace('^', '**').replace('sqrt(', 'Math.sqrt(');
    result = result.replace('sin(', 'Math.sin(').replace('cos(', 'Math.cos(');
    result = result.replace('tan(', 'Math.tan(').replace('log(', 'Math.log10(');
    result = result.replace('ln(', 'Math.log(');

    try {
        display.value = eval(result);
    } catch (e) {
        display.value = 'Error';
    }
}
