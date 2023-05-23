import { ActionType, InitialState, TransactionType } from "../models/ContextType/ContextType";

export const AppReducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case TransactionType.ADD_TRANSACTION:
      return state;
    default:
      return state;
  }
};
