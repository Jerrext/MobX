import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx";

class CounterStore {
  count = 0;
  factor = 2;
  get total() {
    return this.count * this.factor;
  }
  constructor(factor: number) {
    // makeObservable(this, {
    //   count: observable,
    //   increment: action,
    //   decrement: action,
    //   total: computed,
    // });
    makeAutoObservable(this);
    this.factor = factor;
  }
  increment = (value: number) => {
    this.count += value;
  };
  decrement = (value: number) => {
    this.count -= value;
  };
}

// export default new CounterStore();
export default CounterStore;
