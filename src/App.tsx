import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Wrapper from "./components/Wrapper";
import { StoresContext } from "./context/rootStoreContext";
import RootStore from "./mobx/stores/rootStore";

const App = () => {
  return (
    <StoresContext.Provider value={new RootStore()}>
      <div>
        <Wrapper />
      </div>
    </StoresContext.Provider>
  );
};

export default App;
