
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


console.log("using Reduce method");
const arr = [1, 2, 3, 4, 5];

let product = arr.reduce((total, currentItem) => {
    return total*currentItem;
}, 1);
console.log(product);
console.log(arr);


console.log("");
console.log("using filter method");
    function odd(num){
        return (num%2 != 0);
    }
let fil = arr.filter(odd);
console.log(fil);
console.log(arr);


console.log("");
console.log("using filter method");
    function all(nums){
        return nums+1;
    }
let ad = arr.map(all);
console.log(ad);
console.log(arr);