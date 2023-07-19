import React from "react";
import Editor from "../Editor/Editor";
import Preview from "../Preview/Preview";

import { Marked, marked } from "marked";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      parsedMarkDown: "",
      defaultText: " # Header",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      parsedMarkDown: marked.parse(e.target.value),
    });
  }

  componentDidMount() {
    this.setState({
      parsedMarkDown: marked.parse(this.state.defaultText),
    });
  }

  render() {
    return (
      <>
        <Editor
          onChange={this.handleChange}
          defaultText={this.state.defaultText}
        />
        <Preview markDown={this.state.parsedMarkDown} />
      </>
    );
  }
}

export default App;
