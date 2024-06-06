
// constants ? complex data [] {} ?

// variables
    
    // num1 = number (button text)
    // num2 = number(buttontext)
    // operator = '+", "-", "*", "/"
    // restult = "3.14"
    let num1 = ''; 
    let num2 = ''; 
    let operator = '';
    let result = 0


    //dom elements - 
    const numberBtnEls = document.querySelectorAll('.number')    
    const operatorBtnEls = document.querySelectorAll('.operator')
    const equalBtnEl = document.querySelector('.equals')
    const displayEl= document.querySelector('.display')
     


    const render = () => {
        // render is updating the textContent of display
        displayEl.textContent = result
    }

    const updateResult = (value) => {

        result = (value)
        render()
    }

        const updateNumbers = (event) => {
            console.log(event.target.textContent)

            if(num1 && operator){
                console.log('updating num2', event.target.textContent)
                if (!num2) {
                    num2 = event.target.textContent;
                } else {
                    num2 += event.target.textContent;
                }

                updateResult(num2)
            } else {

            if (!num1) {
                num1 = event.target.textContent;
            } else {
                num1 += event.target.textContent;
            }
            updateResult(num1)
        }
    }
// event handler - 

numberBtnEls.forEach((numberBtnEls) => {
    // console.log(numberBtnEls)
    numberBtnEls.addEventListener('click',updateNumbers)
})
const updateOperator = (event) => {
    console.log(event.target.textContent)

operator = event.target.textContent
    if (operator === 'C'){
        num1 = ''; 
        num2 = ''; 
        operator = '';
        result = 0
        render()
    }
}
operatorBtnEls.forEach((operatorBtnEl) => {
    operatorBtnEl.addEventListener('click',updateOperator)
})

 
//Equals operation
 

const calculateResult = () => {
    const number1 = Number(num1)
    const number2 = Number(num2)
    switch(operator) {
        case '+':
            result = (number1) + (number2);
            break;
        case '-':
            result = (number1) - (number2);
            break;
        case '*':
            result = (number1) * (number2);
            break;
        case '/':
            result = (number1) / (number2);
            break;
        default:
            result = 'Error';
            break;

    }
    // Update the display with the result
    render();
    
}


// Event listener for equal button
equalBtnEl.addEventListener('click', calculateResult);

   
