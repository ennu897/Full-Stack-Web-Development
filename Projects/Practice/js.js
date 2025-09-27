
// add function
function add7(number){
    return number+7;
}
console.log(add7(2));

// first letter capitalize function
function capitalize(str){
    return str.charAt(0).toUpperCase();
}
console.log(capitalize("anosh"));

// Print lastLetter
function lastLetter(str){
    for(let i=str.length-1; i<str.length;){
        return str.charAt(i);
    }    
}
console.log(lastLetter("anoshbhk"));


// FizzBuzz program
let answer = parseInt(prompt("Enter a number choice of your own: "));
for(let i=1; i<=answer; i++){
    if(i%3==0 & i%5==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}