import { useContext } from "react";
import { Context } from "../../context";

export const Header = () => {
  const context = useContext(Context);

  return (
    <div>
      Header
      <p>Total: {context.total}</p>
    </div>
  );
};
