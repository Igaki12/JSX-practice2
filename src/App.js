import { useState } from "react";
import "./styles.css";

const names = ["Aoki", "Yamada", "Murakami", "Okugawa"];
const CounterText = (props) => (
  <p>
    {props.name}のカウント数：{props.count}
  </p>
);
const INITIAL_COUNT = 0;
const Counter = (props) => {
  const [count, setCount] = useState(INITIAL_COUNT);
  const countAdd = () => setCount((prevCount) => prevCount + 1);
  const countSub = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);
  return (
    <>
      <button onClick={countAdd}>ボタン +1</button>
      <button onClick={countSub}>ボタン -1</button>
      <button onClick={countReset}>リセット</button>
      <CounterText count={count} name={props.name} />
    </>
  );
};

const ListItems = () => {
  const items = names.map((name) => <Counter name={name} />);
  return <>{items}</>;
};

export default function App() {
  return <ListItems />;
}
