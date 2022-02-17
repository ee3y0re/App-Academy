// import {
//     setInterval,
// } from 'timers/promises';

class Clock {
    constructor() {
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes(); //don't forget parentheses so we don't forget to invoke
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        //COME BACK TO 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        let time = `${this.hours} : ${this.minutes} : ${this.seconds}`;
        console.log(time);
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
        this.seconds += 1;
        if (this.seconds >= 60) {
            this.minutes += 1;
            this.seconds = 0;

            if (this.minutes >= 60) {
                this.hours += 1;
                this.minutes = 0;

                if (this.hours > 24) {
                    this.hours = 1;
                }
            }
        }

        this.printTime();
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

/*
const clock = new Clock();
*/

// const readline = require('readline');

// reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback){
//     if (numsLeft === 0 ){
//         completionCallback(sum);
//         reader.close();
//         // return;
//     } else {
//         reader.question("Give me a number: ", answer => {
//             let num = parseInt(answer);
//             let newSum = sum + num;
//             console.log(newSum);
//             let newNumsLeft = numsLeft - 1;
//             addNumbers(newSum, newNumsLeft, completionCallback);
//         });
//     }
// };

/* 
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
 */


Function.prototype.myBind = function(context) {
    return () => { //returns function captures this and context
        //this = whatever function calls myBind
        debugger
        this.apply(context);
        // Function.prototype.apply(this, context)//through apply
    }; 
}

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"