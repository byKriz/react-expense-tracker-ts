import { useContext } from "react";
import { Context } from "../../context";

export const Balance = () => {
  const data = useContext(Context);

  return (
    <div>
      <h1>Balance</h1>
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  );
};
