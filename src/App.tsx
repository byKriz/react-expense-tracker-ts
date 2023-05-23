import { GlobalProvider } from "./context";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionForm } from "./components/TransactionForm";

export const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <h1>Hello World</h1>
      <Balance />
      <TransactionForm />
    </GlobalProvider>
  );
};
