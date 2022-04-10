// コンポーネントの書き方

// import React
// reactの中から分割代入でuseStateを取り出す
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// JSX記法：JavaScriptの中でHTMLのタグをreturnする
// returnする中のタグは、１つのタグで囲う必要がある <>~</>（<React.Fragment>~</React.Fragment>の略）
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1); // 引数に更新したい値
  };

  // stateを使用する
  // useStateから配列の分割代入で '変数'と'set変数'を取得
  // 「stateの変数名」と「stateを更新する関数名」
  // useState()の引数には変数の初期値を指定
  const [num, setNum] = useState(0);

  return (
    <>
      {/* JSXではJavaScriptの属性をキャメルケースで書く */}
      {/* HTMLの中にJavaScriptを書く時は{}で囲う */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* コンポーネントタグで囲んだ文字列は、props.childrenで受け取れる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>

      <p>{num}</p>
    </>
  );
};

// Appコンポーネントを他のファイルで使用できるようにする
export default App;
