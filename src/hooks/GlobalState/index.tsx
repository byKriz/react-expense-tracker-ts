import { useContext } from "react";
import { Context } from "../../context";

export const useGlobalState = () => useContext(Context)