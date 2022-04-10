// コンポーネントの書き方

// import React
import React from "react";

// JSX記法：JavaScriptの中でHTMLのタグをreturnする
// returnする中のタグは、１つのタグで囲う必要がある <>~</>（<React.Fragment>~</React.Fragment>の略）
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "red",
    fontSize: "18px"
  };

  return (
    <>
      {/* JSXではJavaScriptの属性をキャメルケースで書く */}
      {/* HTMLの中にJavaScriptを書く時は{}で囲う */}
      <h1 style={contentStyle}>こんにちは</h1>
      <p>お元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// Appコンポーネントを他のファイルで使用できるようにする
export default App;
