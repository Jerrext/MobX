import React, { FC } from "react";
// import { observer } from "mobx-react-lite";
// import counterStore from "src/mobx/stores/counterStore";

type CounterProps = {
  count: number;
  increment: (value: number) => void;
  decrement: (value: number) => void;
  total: number;
};

const Counter: FC<CounterProps> = ({ count, increment, decrement, total }) => {
  // const { count, increment, decrement, total } = counterStore;
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => increment(1)}>+</button>
      {count}
      <button onClick={() => decrement(1)}>-</button>
      {total}
    </div>
  );
};

export default Counter;
