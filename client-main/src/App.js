import { Suspense } from "react";
import "normalize.css";
import "./App.scss";
import Todos from "./pages/todos";

function App() {
  return (
    <div className="App">
      <main aria-label="Main Content">
        <Suspense fallback={<div>Loading...</div>}>
          <Todos />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
