import React from "react";

import './Preview.css'


const Preview = (props) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: props.markDown }}
    ></div>
  );
};

export default Preview;
