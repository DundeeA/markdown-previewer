import React from "react";
import './Editor.css'

function Editor(props) {
  return (
    <textarea
      id="editor"
      onChange={props.onChange}
      defaultValue={props.defaultText}
    >
    </textarea>
  );
}

export default Editor;
