import "./styles.css";
import StoreProvider from "./store";
import Home from "./pages/home";

export default function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Home />
      </StoreProvider>
    </div>
  );
}
