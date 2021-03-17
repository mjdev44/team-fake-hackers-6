//math operations

//function that gets two numbers as paramaters and return sum result
const addition = (a, b) => a + b;

//function that gets two numbers as paramaters and multiply one by the other
const multiplication = (a, b) => a * b;

//function that gets two numbers, 1 number subtract the other and get the result.
const subtraction = (a,b) => a-b;
//function that gets two numbers, do division and get result\
function division(a,b){
    if (b != 0) 
        var result = a/b;
    else
        alert('b is 0');
    return result;
} 
//export the functions addition, multiplication for testing the operation
module.exports = { 
    multiplication,
    addition,
    division,
    subtraction
};


