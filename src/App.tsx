import { Header } from "./components/Header";
import { GlobalProvider } from "./context";

export const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <h1>Hello World</h1>
    </GlobalProvider>
  );
};
