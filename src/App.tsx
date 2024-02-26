import { UserContextProvider } from "./context/userContext";
import Ways from "./routes/router";

const App = (): JSX.Element => {
  return (
    <>
    <UserContextProvider>
      <Ways />
    </UserContextProvider>
    </>
  );
};

export default App;
