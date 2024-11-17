const calculations = { value1: 0.0, value2: 0.0, operator: "none" };
let state = "value1";
let forceReset = false;

/* operator functions */
function operate(value1,value2,operator)
{
    let answer = 0;
    switch (operator)
    {
        case "add":
            answer = add(value1,value2);
            break;
        case "subtract":
            answer = subtract(value1,value2);
            break;
        case "multiply":
            answer = multiply(value1,value2);
            break;
        case "divide":
            answer = divide(value1,value2);
            break;
        default:
            console.log("operator error");
            break;
    }
    if (answer == null)
    {
        numberdisplay.textContent = "Error";
        return;
    }
    answer = answer.toFixed(6);
    numberdisplay.textContent = parseFloat(answer);
}
function add(value1,value2)
{
    return value1 + value2;
}
function subtract(value1,value2)
{
    return value1 - value2;
}
function multiply(value1,value2)
{
    return value1 * value2;
}
function divide(value1,value2)
{
    if (value2 == 0)
    {
        return null;
    }
    return value1 / value2;
}

/* digit counter */
function countDigits(number) {
    // convert number to a string and get its length; used for calculating value size
    return Math.abs(number).toString().length; 
}

/* number display related functions */
const numberdisplay = document.getElementsByClassName('numberDisplay')[0];
function displayTheNumber(value, reset)
{   
    if (reset === true)
    {
        numberdisplay.textContent = 0;
        forceReset = false;
    }
    if (countDigits(numberdisplay.textContent) == 7)
    {
        console.log("max digits reached");
        return;
    }
    
    if (numberdisplay.textContent == 0)
    {
        numberdisplay.textContent = value;
    }
    else
    {
        numberdisplay.textContent += value;
    }
}

/* ac button */
function reset()
{
    calculations.value1 = 0;
    calculations.value2 = 0;
    calculations.operator = "none";
    state = "value1";
    numberdisplay.textContent = 0;
}

/* reset after answer is found */
function resetCalculations()
{
    calculations.value1 = parseInt(numberdisplay.textContent);
    calculations.value2 = 0;
    calculations.operator = "none";
    state = "value1";
}

/* operator button */
function operatorSelect(operator)
{
    console.log(state);
    if (state == "value1")
    {
        state = "value2"; // ready for second number
        // did we have a number previously because of a previous operation? if so, skip
        if (calculations.value1 == 0)
        {
            calculations.value1 = parseInt(numberdisplay.textContent,10);
            forceReset = true;
            switch (operator)
            {
                case "add":
                    calculations.operator = "add";
                    break;
                case "subtract":
                    calculations.operator = "subtract";
                    break;
                case "multiply":
                    calculations.operator = "multiply";
                    break;
                case "divide":
                    calculations.operator = "divide";
                    break;
                default:
                    console.log("invalid operator during select");
                    break;
            }
        }
        else
        {
            calculations.value2 = parseInt(numberdisplay.textContent,10);
            operate(calculations.value1,calculations.value2,operator);
            resetCalculations(); // ready for new number
            forceReset = true;
        }
    }
    else
    {
        calculations.value2 = parseInt(numberdisplay.textContent,10);
        operate(calculations.value1,calculations.value2,calculations.operator);
        resetCalculations(); // ready for new number
        forceReset = true;
    }
}

/* buttons */
const calcdiv = document.getElementsByClassName('calculator')[0]; // event delegation used

calcdiv.addEventListener("click", (event) => {
  if (numberdisplay.textContent == "Error")
  {
    reset();
  }
  switch (event.target.id)
  {
    /* numbers */
    case "one":
        displayTheNumber(1, forceReset);
        break;
    case "two":
        displayTheNumber(2, forceReset);
        break;
    case "three":
        displayTheNumber(3, forceReset);
        break;
    case "four":
        displayTheNumber(4, forceReset);
        break;
    case "five":
        displayTheNumber(5, forceReset);
        break;
    case "six":
        displayTheNumber(6, forceReset);
        break;
    case "seven":
        displayTheNumber(7, forceReset);
        break;
    case "eight":
        displayTheNumber(8, forceReset);
        break;
    case "nine":
        displayTheNumber(9, forceReset);
        break;
    case "zero":
        displayTheNumber(0, forceReset);
        break;
    /* ac */
    case "clear":
        reset();
        break;
    /* operators */
    case "plus":
        operatorSelect("add");
        break;
    case "minus":
        operatorSelect("subtract");
        break;
    case "mult":
        operatorSelect("multiply");
        break;
    case "divide":
        operatorSelect("divide");
        break;
    case "equal":
        if (calculations.operator == "none")
        {
            break;
        }
        calculations.value2 = parseInt(numberdisplay.textContent,10);
        operate(calculations.value1,calculations.value2,calculations.operator);
        resetCalculations(); // ready for new number
        forceReset = true;
        break;
    /* unreachable */
    default:
        break;
  }
})
