import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date(),
            hours : this.state.time.getHours,
            minutes: this.state.time.getMinutes,
            seconds: this.state.time.getSeconds,
            date: this.state.time.getUTCDate
        };
        // this.setTime = {this.state.hours}
        this.tick = this.tick.bind(this);

    }
    // tick(){
    //     this.setState({ time: this.seconds + 1
    //                     if(this.seconds >= 60) {
    //         this.minutes += 1;
    //         this.seconds = 0;

    //         if (this.minutes >= 60) {
    //             this.hours += 1;
    //             this.minutes = 0;

    //             if (this.hours > 24) {
    //                 this.hours = 1;
    //             }
    //         }
    //     }
    //     });
    // }

    render(){
        return(
            <div>
            <h1>This is the current time</h1>
            <p>{this.state.time} {this.state.hours} {this.state.minutes} {this.state.seconds} {this.state.date}</p>
            </div>
        )
    }

}

export default Clock;