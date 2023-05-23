import React, { createContext, useReducer } from "react";
import {
  ContextValueType,
  InitialState,
} from "../models/ContextType/ContextType";
import { AppReducer } from "./AppReducer";

interface Props {
  children: React.ReactNode;
}

const initialState: InitialState = {
  trasactions: [],
};

export const Context = createContext<ContextValueType>({
  state: initialState,
  dispatch: () => null,
  transactions: [],
});

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <Context.Provider value={{ transactions: state.trasactions }}>
      {children}
    </Context.Provider>
  );
};
