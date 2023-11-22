import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Admin from "./Components/Admin_UI";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mainbody">
        <Admin />
      </div>
    </>
  );
}

export default App;
