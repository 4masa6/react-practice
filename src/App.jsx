/**
 * コンポーネントの書き方
 */
// import React
import React from "react";

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

// Appコンポーネントを他のファイルで使用できるようにする
export default App;
