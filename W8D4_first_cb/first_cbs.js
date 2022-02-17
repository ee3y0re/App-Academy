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

const clock = new Clock();