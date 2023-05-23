export interface ContextValueType {
  state?: InitialState;
  dispatch?: React.Dispatch<ActionType>;
  transactions?: Transaction[]
}

export interface InitialState {
  trasactions: Transaction[];
}

export interface ActionType {
  type: TransactionType;
  payload: number;
}

export interface Transaction {
  id: number;
  amount: number;
}

export enum TransactionType {
  ADD_TRANSACTION = "ADD_TRANSACTION",
}
