import { GlobalProvider } from "./context";

export const App = () => {
  return (
    <GlobalProvider>
      <h1>Hello World</h1>
    </GlobalProvider>
  );
};
