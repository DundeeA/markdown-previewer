import React from "react";
import Editor from "../Editor/Editor";
import Preview from "../Preview/Preview";
import './App.css'

import { Marked, marked } from "marked";


marked.use({breaks: true });

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      parsedMarkDown: "",
      defaultText: " # Welcome \n ## to the markdown previewer! <br> \n created by [dundee]('')<br> \n`<>Heres some inline code</>` \n <br>and a larger code block: \n``` \n function myCode(){ \n  return true; \n} \n ``` \n 1. you  \n 2. can \n 3. make \n 4. list \n > 'and block quotes!' \n \n**Oh and bold text , heres a cat pic** \n ![cat pic](https://m.media-amazon.com/images/I/81hueZjyFcL.png 'cat pic') ",
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
      <div id="app">  
      <h1>Markdown <span>Previewer</span></h1>
      <div className="markdown">
      <Editor
          onChange={this.handleChange}
          defaultText={this.state.defaultText}
        />
        <Preview markDown={this.state.parsedMarkDown} />
       </div>  
      </div>
    );
  }
}

export default App;
