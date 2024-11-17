const calculations = { value1: 0.0, value2: 0.0, operator: "none" };
let state = "value1";

/* operator functions */
function operate(value1,value2,operator)
{
    switch (operator)
    {
        case "add":
            add(value1,value2);
            break;
        case "subtract":
            subtract(value1,value2);
            break;
        case "multiply":
            multiply(value1,value2);
            break;
        case "divide":
            divide(value1,value2);
            break;
        default:
            console.log("operator error");
            break;
    }
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
function displayTheNumber(value)
{
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

/* buttons */
const calcdiv = document.getElementsByClassName('calculator')[0]; // event delegation used

calcdiv.addEventListener("click", (event) => {
  switch (event.target.id)
  {
    case "one":
        displayTheNumber(1);
        break;
    case "two":
        displayTheNumber(2);
        break;
    case "three":
        displayTheNumber(3);
        break;
    case "four":
        displayTheNumber(4);
        break;
    case "five":
        displayTheNumber(5);
        break;
    case "six":
        displayTheNumber(6);
        break;
    case "seven":
        displayTheNumber(7);
        break;
    case "eight":
        displayTheNumber(8);
        break;
    case "nine":
        displayTheNumber(9);
        break;
    case "zero":
        displayTheNumber(0);
        break;
    case "clear":
        break;
  }
})
