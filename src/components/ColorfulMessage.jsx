import React from "react";

// 引数でproosを受け取れる
const ColorfulMessage = (props) => {
  console.log(props);

  // 分割代入でpropsを取り出すとコードがスッキリする
  const { color, children } = props;

  const contentStyle = {
    color, // color: color, プロパティと値が同じ場合省略可
    fontSize: "18px"
  };

  // props.childrenを指定すると、コンポーネントのタグで囲んだ文字列が取得できる
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
