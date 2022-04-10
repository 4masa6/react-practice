import React from "react";
import ReactDom from "react-dom";

// JSX記法：JavaScriptの中でHTMLのタグをreturnする
// returnする中のタグは、１つのタグで囲う必要がある <>~</>（<React.Fragment>~</React.Fragment>の略）
const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
