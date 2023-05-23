import React, { createContext } from "react";
import { ContextValueType } from "../models/ContextType/ContextType";

interface Props {
  children: React.ReactNode;
}

export const Context = createContext<ContextValueType>({ total: 100 });

export const GlobalProvider = ({ children }: Props) => {
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};
