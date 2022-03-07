//need to import react
import React from 'react';

//pretty much the main parent component is the react component
class Clock extends React.Component {
  //props will be passed down from react component, which is actually defined in the root file
  constructor(props) {
    //super props to be able to use the props passed down from parent
    super(props);
    //the state that will be changing
    this.state = {
      //new instance of date also comes with it's instance methods which will be used in the render method
      time : new Date(),
    };

    //need to bind tick because without it, the context of the clock is lost
    this.tick = this.tick.bind(this);

  }

  //invoke everything in this function as soon as the clock component is inserted into the html tree
  //where we actually call tick, not in render
  componentDidMount() {
    this.tickingID = setInterval(this.tick, 1000);
  }

  //invoke everything inside before component unmounted (removed from html tree) and destroyed
  //good for clean up
  componentWillUnmount() {
    clearInterval(this.tickingID);
  }

  //method that always sets the state of clock to a new instance of date
  tick(){
    //making sure tick is recognized
    // return "tick is recognized";
    this.setState({time : new Date()});
  }

  //this is where we will use date instance methods
  render(){
    //const makes it read-only
    //use let instead
    //instance methods to get seconds, minutes, hours
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    //reassigning variables to print seconds, minutes, and hours in time reading format with the colons
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return(
      //good to have containers for each widget
      <div className="clock-container">
        {/* making sure tick is recognized and really anything in render is recognized*/}
        {/* <p>{this.tick()}</p> */}
        {/* added class to clock title to target and style clock title */}
        <h1 className="clock-title">Tick-Tock Clock</h1>
        {/* container for just the time */}
        <div className="time">
          <span>Time:</span>
          <span>{hours}:{minutes}:{seconds} PST</span>
        </div>
        {/* container for just the date */}
        <div className="date">
          <p>Date:</p>
          {/* the prompt gave a hint of "human-readable string", search docs for that */}
          <p>{this.state.time.toDateString()}</p>
        </div>
      </div>
    );
  }

}

export default Clock;