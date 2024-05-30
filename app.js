
// constants ? complex data [] {} ?

// variables
    
    // num1 = number (button text)
    // num2 = number(buttontext)
    // operator = '+", "-", "*", "/"
    // restult = "3.14"
    let num1 = 0 
    let num2 = 0
    let operator
    let result = 0


    //dom elements - 
    const numberBtnEls = document.querySelectorAll('.number')    
    const operatorBtnEls = document.querySelectorAll('.operator')
    const equalBtnEl = document.querySelectorAll('.equals')
    const displayEl= document.querySelector('.display')


        // buttons
        //     div.number 
        //     div.operator
        //     div.equal
        // result - .display

        // functions
    const render = () => {
        // render is updating the textContent of display
        displayEl.textContent = result
    }

    const updateResult = (event) => {

        result = (num1 || num2)
        render()
    }

        const updateNumbers = (event) => {
            console.log(event.target.textContent)

            if (!operator) {
                if (!num1) {
                    num1 = event.target.textContent;
                } else {
                    num1 += event.target.textContent;
                }
            } else {
                if (num2) {
                    num2 = event.target.textContent;
                } else {
                    num2 += event.target.textContent;
                }
            }
       // num1 is filled when no opearator but num2 is filled out when operator is in
        updateResult()
        }

// event handler - 

numberBtnEls.forEach((numberBtnEls) => {
    // console.log(numberBtnEls)
    numberBtnEls.addEventListener('click',updateNumbers)
})
const updateOperator = (event) => {
    console.log(event.target.textContent)

operator = event.target.textContent
}
operatorBtnEls.forEach((operatorBtnEl) => {
    operatorBtnEl.addEventListener('click',updateOperator)
})

 
//Equals operation
 

const calculateResult = () => {
    switch(operator) {
        case '+':
            result = (num1) + (num2);
            break;
        case '-':
            result = (num1) - (num2);
            break;
        case '*':
            result = (num1) * (num2);
            break;
        case '/':
            result = (num1) / (num2);
            break;
        default:
            result = 'Error';
            break;
    }
    // Update the display with the result
    render();
    equalBtnEl.addEventListener('click', calculateResult);
}


// Event listener for equal button


   
