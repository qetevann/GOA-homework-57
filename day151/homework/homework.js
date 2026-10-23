class Calculator {
    constructor(previousOperandEl, currentOperandEl) {
        this.previousOperandEl = previousOperandEl;
        this.currentOperandEl = currentOperandEl;
        this.clear();
    }

    clear() {
        this.currentOperand = "0";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete() {
        if (this.currentOperand === "0") return;
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand === "") {
            this.currentOperand = "0";
        }
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;

        if (this.currentOperand === "0" && number !== ".") {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === "0" && this.previousOperand === "") return;

        if (this.previousOperand !== "") {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "0";
    }

    compute() {
        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                if (current === 0) {
                    result = "ნულზე გაყოფა შეუძლებელია";
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }

        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = "";
    }

    getDisplayNumber(number) {
        if (typeof number === "string" && isNaN(number)) {
            return number;
        }

        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];

        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandEl.textContent = this.getDisplayNumber(this.currentOperand);

        if (this.operation != null) {
            this.previousOperandEl.textContent =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandEl.textContent = "";
        }
    }
}



const previousOperandEl = document.getElementById("previousOperand");
const currentOperandEl = document.getElementById("currentOperand");
const buttons = document.querySelectorAll(".btn");

const calculator = new Calculator(previousOperandEl, currentOperandEl);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const { number, operator, action } = button.dataset;

        if (number !== undefined) {
            calculator.appendNumber(number);
        } else if (operator !== undefined) {
            calculator.chooseOperation(operator);
        } else if (action === "clear") {
            calculator.clear();
        } else if (action === "delete") {
            calculator.delete();
        } else if (action === "equals") {
            calculator.compute();
        }

        calculator.updateDisplay();
    });
});

calculator.updateDisplay();