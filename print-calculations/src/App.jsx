import "./App.css";
import Calculate from "./components/Calculate";
import Result from "./components/Result";

function App() {
  return (
    <main>
      <div className="main-page">
        <Calculate></Calculate>
        <Result></Result>
      </div>
    </main>
  );
}

export default App;
