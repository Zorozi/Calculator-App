// Select all the calculator buttons and the result field
const buttons = document.querySelectorAll(".calculator-button");
const resultField = document.getElementById("result");

let isComputed = false;

// Loop through each button and add a click event listener
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    // Handle different button types
    switch (buttonValue) {
    case "C":
        resultField.value = "";
        isComputed = false;
        break;
    case "÷":
        const divideByZeroCheck = Number(resultField.value);
        if (divideByZeroCheck === 0) {
            resultField.value = "Error: Cannot divide by zero";
        } else {
            resultField.value += "/"
        }
        break;
    case '+/-':
        resultField.value = -resultField.value
        break;
    case "%":
        resultField.value = resultField.value* 0.01.toFixed(3)
        break;  
    case "=":
        try {
            const evaluatedValue = eval(resultField.value);
          if(isNaN(evaluatedValue)) {
           resultField.value = 'Error'
          } else {
            resultField.value = evaluatedValue;
            isComputed = true;
          } 
        } catch (error) {
          resultField.value = "Error";
        }
        break;
      default:
        if (isComputed) {
            resultField.value = buttonValue;
            isComputed = false;
        } else {
        resultField.value += buttonValue;
        }
        break;
    }
  });
});

//add an event listener for the delete button

const deleteBtn  = document.getElementById('delete')
deleteBtn.addEventListener('click', () => {
    resultField.value = resultField.value.slice(0, -1);

    if(resultField.textContent.includes('=')) {
        resultField.value = resultField.value.split('=')[0];
        isComputed = false
    }
        
})
