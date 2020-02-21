let firstValue = window.prompt("Enter first value.");
let secondValue = window.prompt("Enter second value.");
let operation = "";
while (true) {
    operation = window.prompt("What operation do you want to perform (add, subtract, multiply, divide)?");
    if ((operation === "add")||(operation === "subtract")||(operation === "multiply")||(operation === "divide")) {
        break;
    }
}
function calculate(x, y, z) {
    let result;
switch(z) {
    case "add":
        result = parseInt(x) + parseInt(y);
        window.alert("The result is " + result);
        break;
    case "subtract":
        result = parseInt(x) - parseInt(y);
        window.alert("The result is " + result);
        break;
    case "multiply":
        result = parseInt(x) * parseInt(y);
        window.alert("The result is " + result);
        break;
    case "divide":
        result = parseInt(x) / parseInt(y);
        window.alert("The result is " + result);
        break;
    }
}
calculate(firstValue, secondValue, operation);