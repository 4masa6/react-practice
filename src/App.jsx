// import React
// reactの中から分割代入でuseState, useEffectを取り出す
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// JSX記法：JavaScriptの中でHTMLのタグをreturnする
// returnする中のタグは、１つのタグで囲う必要がある <>~</>（<React.Fragment>~</React.Fragment>の略）
const App = () => {
  // ** 再レンダリングされる条件
  // * stateが更新された時
  // * propsを受け取っている子コンポーネントで、propsの値が変わった時
  // * 親のコンポーネントが再レンダリングされた時

  // stateを使用する
  // useStateから配列の分割代入で '変数'と'set変数'を取得
  // 「stateの変数名」と「stateを更新する関数名」
  // useState()の引数には変数の初期値を指定
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1); // 引数に更新したい値
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    // Too many re-renders.　のエラーが出ないように注意
    if (num !== 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]); // useEffectの第２引数に指定した変数にだけ関心を持たせる

  return (
    <>
      {/* JSXではJavaScriptの属性をキャメルケースで書く */}
      {/* HTMLの中にJavaScriptを書く時は{}で囲う */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* コンポーネントタグで囲んだ文字列は、props.childrenで受け取れる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>

      <p>{num}</p>

      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

// Appコンポーネントを他のファイルで使用できるようにする
export default App;
