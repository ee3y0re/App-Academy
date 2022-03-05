import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date(),
        };

        this.tick = this.tick.bind(this);

    }

    componentDidMount() {
      this.tickingID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.tickingID);
    }



    tick(){
      //making sure tick is recognized
      // return "tick is recognized";
      this.setState({time : new Date()});
    }

    render(){
      //const makes it read-only
      let hours = this.state.time.getHours();
      let minutes = this.state.time.getMinutes();
      let seconds = this.state.time.getSeconds();

      hours = (hours < 10) ? `0${hours}` : hours;
      minutes = (minutes < 10) ? `0${minutes}` : minutes;
      seconds = (seconds < 10) ? `0${seconds}` : seconds;

      return(
        <div>
          {/* the goal
          <p>00:00:00 PST</p> */}
          {/* making sure tick is recognized */}
          {/* <p>{this.tick()}</p> */}
          
          <p>{hours}:{minutes}:{seconds} PST</p>
        </div>
      )
    }

}

export default Clock;