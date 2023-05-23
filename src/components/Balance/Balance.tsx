import { useGlobalState } from "../../hooks/GlobalState/GlobalState";

export const Balance = () => {
  const data = useGlobalState();

  return (
    <div>
      <h1>Balance</h1>
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  );
};
