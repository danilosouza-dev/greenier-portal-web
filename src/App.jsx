import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  )
}