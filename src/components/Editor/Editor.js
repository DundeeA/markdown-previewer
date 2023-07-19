import React from "react";

function Editor(props) {
  return (
    <textarea
      id="editor"
      rows={60}
      cols={80}
      onChange={props.onChange}
    ></textarea>
  );
}

export default Editor;
