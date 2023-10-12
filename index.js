//function challenges:

//Number One

//Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.For bonus points, write it as a one line arrow function

function getCelsius(F) {
    return (F - 32) * 5 / 9;
    
}
console.log(Math.round(getCelsius(100)));

// (F) => (F - 32) * 5 / 9;

// console.log(getCelsius(100));

console.log(`The temperatur is ${Math.round(getCelsius(100))}\xB0C`);

//Number 2

//Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

//**Expected Result:**

//```JavaScript
//console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }

const minMax = (n) => { 
    const min = Math.min(...n);
    const max = Math.max(...n);

    return {
        min,
        max,
    };
};
    
console.log(minMax([1, 2, 3, 4, 5, 6, 7]));


//Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

(function (length, width) {
    const area = length * width;

    const display = `The area of a rectangle with ${length} and width of ${width} is ${area}`;

    console.log(display);
})(2,2);