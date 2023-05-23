import { useContext } from "react";
import { Context } from "../../context/Context";

export const useGlobalState = () => useContext(Context)