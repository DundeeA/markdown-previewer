import React from "react";

import Editor from "../Editor/Editor";
import Preview from "../Preview/Preview";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMarkDown: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      currentMarkDown: e.target.value,
    });
  }

  render() {
    return (
      <>
        <Editor onChange={this.handleChange} />
        <Preview markDown={this.state.currentMarkDown} />
      </>
    );
  }
}

export default App;
