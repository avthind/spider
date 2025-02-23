document.addEventListener("DOMContentLoaded", () => {
    let display = document.getElementById("display");
    let currentInput = "0";
    let shouldResetDisplay = false;

    function updateDisplay(value) {
        display.textContent = value;
    }

    function appendNumber(num) {
        if (shouldResetDisplay) {
            currentInput = num;
            shouldResetDisplay = false;
        } else {
            if (currentInput === "0" && num !== ".") {
                currentInput = num; // Replace leading zero unless appending a decimal
            } else {
                currentInput += num;
            }
        }
        correctDecimalErrors();
        updateDisplay(currentInput);
    }

    function appendOperator(operator) {
        if (shouldResetDisplay) {
            shouldResetDisplay = false;
        }

        // Ensure only the last entered operator is used
        if (operator === "-" && /[\+\-\*\/]$/.test(currentInput)) {
            currentInput += operator; // Allow negative sign after operator
        } else {
            currentInput = currentInput.replace(/[\+\-\*\/]+$/, ""); // Remove trailing operators
            currentInput += operator;
        }

        updateDisplay(currentInput);
    }

    function appendDecimal() {
        let lastNum = currentInput.split(/[\+\-\*\/]/).pop(); // Get last number

        if (lastNum === "") {
            // If decimal is pressed without a number, start with "0."
            currentInput += "0.";
        } else if (!lastNum.includes(".")) {
            currentInput += "."; // Append decimal
        }

        correctDecimalErrors();
        updateDisplay(currentInput);
    }

    function correctDecimalErrors() {
        // Fix cases like "5..0" → "5.0"
        currentInput = currentInput.replace(/(\d+)\.\.(\d*)/g, "$1.$2");
        // Fix cases like "5.." → "5.0"
        currentInput = currentInput.replace(/(\d+)\.\.$/g, "$1.0");
    }

    function calculateResult() {
        try {
            correctDecimalErrors(); // Fix invalid decimals before evaluating
            let result = eval(currentInput);
            result = parseFloat(result.toFixed(4)); // Handle floating point precision
            updateDisplay(result);
            currentInput = result.toString();
            shouldResetDisplay = true;
        } catch {
            updateDisplay("Error");
            currentInput = "";
        }
    }

    function clearCalculator() {
        currentInput = "0";
        updateDisplay("0");
    }

    document.querySelectorAll(".number").forEach(button => {
        button.addEventListener("click", () => appendNumber(button.textContent));
    });

    document.querySelectorAll(".operator").forEach(button => {
        button.addEventListener("click", () => appendOperator(button.textContent));
    });

    document.getElementById("decimal").addEventListener("click", appendDecimal);
    document.getElementById("equals").addEventListener("click", calculateResult);
    document.getElementById("clear").addEventListener("click", clearCalculator);
});
