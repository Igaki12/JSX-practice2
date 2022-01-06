import { useContext, useState } from "react";
import "./styles.css";

const names = [
  { name: "Aoki", btns: 1 },
  { name: "Yamada", btns: 3 },
  { name: "Murakami", btns: 6 },
  { name: "Okugawa", btns: 5 }
];
const CounterText = (props) => (
  <p>
    {props.name}のカウント数：{props.count}
  </p>
);
const InputBtns = (props) => {
  return (
    <>
      <p>目標回数:{props.btns}回</p>
      <input type="radio"></input>
      <input type="radio"></input>
      <input type="radio"></input>
    </>
  );
};
const INITIAL_COUNT = 0;
const Counter = (props) => {
  const [count, setCount] = useState(INITIAL_COUNT);
  let countAdd = () => setCount((prevCount) => prevCount + 1);
  let countSub = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);
  return (
    <>
      <button onClick={countAdd}>ボタン +1</button>
      <button onClick={countSub}>ボタン -1</button>
      <button onClick={countReset}>リセット</button>
      <CounterText count={count} name={props.name} />
      <InputBtns btns={props.btns} />
      <br />
    </>
  );
};

const ListItems = () => {
  const items = names.map((item) => (
    <Counter name={item.name} btns={item.btns} />
  ));
  return <>{items}</>;
};

export default function App() {
  return <ListItems />;
}
