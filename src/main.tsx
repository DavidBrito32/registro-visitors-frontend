import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import { PrimeReactProvider } from "primereact/api";
import "/node_modules/primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import "primeflex/themes/primeone-light.css";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }
`;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <PrimeReactProvider>
      <GlobalStyle />
      <App />
    </PrimeReactProvider>
  </>
);
