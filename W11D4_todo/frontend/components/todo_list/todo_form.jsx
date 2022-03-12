import React from "react";
import { uniqueId } from "../../util/util";

//remember to capitlize component or else super won't work :D
class TodoForm extends React.Component { //classes extend react comp but not constants
  constructor (props){
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
  }
  updateBody(e) {
    this.setState({ body: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add New To Do</h3>
          <label>Title: 
            <input 
            type="text"
            value={this.state.title}
            onChange={this.updateTitle}
            />
          </label>
          <br />
          <br />
          <label>Description:
            <input
              type="text"
              value={this.state.body}
              onChange={this.updateBody}
            />
          </label> 
          <br />
          <br />
          {/* <label id="done">
            <input id="done" type="radio" />
          </label> */}
          <input type="submit" value="Add To Do"/>
      </form>
    )
  }
}

export default TodoForm;