import React from "react";
import { observer } from "mobx-react-lite";
import Counter from "../Counter";
import CounterStore from "src/mobx/stores/counterStore";
import PostsList from "../PostsList";

const counter1 = new CounterStore(2);
const counter2 = new CounterStore(3);

const Wrapper = observer(() => {
  return (
    <div>
      <Counter {...counter1} total={counter1.total} />
      <Counter {...counter2} total={counter2.total} />
      <PostsList />
    </div>
  );
});

export default Wrapper;
