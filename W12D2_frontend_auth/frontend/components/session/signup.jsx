import React from "react";

class SignUp extends React.Component {
  //need local state to keep track of fields we will be building
  constructor(props) {
    //from container
    super(props);
    this.state = {
      //fields
      username: "",
      email: "",
      password: "",
    };

    // this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    //prevent default post request and rerender
    //want to save time and make sure app stages single page
    e.preventDefault();
    this.props.createNewUser(this.state)
      //if we successfully created new user, want to have a function that redirects
      //wrapping this whole component inside Route to have access to history on entry file
      .then(() => this.props.history.push('./chirps'));
  }

  render(){
    return <div className="session-form">
      <h2>Sign Up</h2>
      <form>

        <label>Username:
          <input type="text"
          value={this.state.username}
          onChange={this.handleInput('username')}
        />
        </label>

        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.handleInput('email')}
          />
        </label>

        <label>Password:
          <input type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
          />
        </label>

        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    </div>
  }
};

export default SignUp;