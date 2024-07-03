// ExternalScript.js
import { useEffect } from "react";
const ExternalScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src =
      "//pl23653927.highrevenuenetwork.com/c585504fb3dc99a7de846b15314eeac1/invoke.js";
    document
      .getElementById("container-c585504fb3dc99a7de846b15314eeac1")
      .appendChild(script);
  }, []);

  return <div id="container-c585504fb3dc99a7de846b15314eeac1"></div>;
};

export default ExternalScript;
