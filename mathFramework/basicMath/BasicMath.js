/*
Basic math functions seperate from the main source code. Math framework.
*/

function add(value1, value2){
    if(typeof value1 !== 'number' && typeof value2 !== 'number'){
        alert("Please enter a number");
    }
    else{
        return value1 + value2;
    }
}

function subtract(value1, value2){
    if(typeof value1 !== 'number' && typeof value2 !== 'number'){
        alert("Please enter a number");
    }
    else{
        return value1 - value2;
    }
}

function multiply(value1, value2){
    if(typeof value1 !== 'number' && typeof value2 !== 'number'){
        alert("Please enter a number");
    }
    else{
        return value1 * value2;
    }
}

function divide(value1, value2){
    if(typeof value1 !== 'number' && typeof value2 !== 'number'){
        alert("Please enter a number");
    }
    else{
        return value1 / value2;
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}