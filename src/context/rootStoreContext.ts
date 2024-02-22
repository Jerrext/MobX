import { createContext, useContext } from "react";
import RootStore from "src/mobx/stores/rootStore";

export const StoresContext = createContext<RootStore | null>(null);

export const useStoresContext = () => {
  const context = useContext(StoresContext);

  if (context === null) {
    throw new Error("");
  }

  return context;
};
