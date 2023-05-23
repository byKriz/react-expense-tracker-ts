import { GlobalProvider } from "./context/Context";
import { Header } from "./components/Header/Header";
import { Balance } from "./components/Balance/Balance";
import { TransactionForm } from "./components/TransactionForm/TransactionForm";

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
