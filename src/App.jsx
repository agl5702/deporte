import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src =
      "//pl23653927.highrevenuenetwork.com/c585504fb3dc99a7de846b15314eeac1/invoke.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h1>hola</h1>
      <div id="container-c585504fb3dc99a7de846b15314eeac1"></div>
    </>
  );
}

export default App;
