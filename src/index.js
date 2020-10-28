import React from "react";
import ReactDOM from "react-dom";
import './styles/index.css';

const Index = () => {
  return (
    <div>
      <h1 className="App">Hello Folks!</h1>
      <p className="App">Let's Setup React, Webpack 4, Babel 7 in a custom way!</p>;
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
