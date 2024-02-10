import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { AppHeader } from "./components/AppHeader";

function App() {
  return (
    <div>
      <AppHeader />
      <Home />
    </div>
  );
}

export default App;
