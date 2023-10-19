import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  const name = "";

  const [comp, setComp] = React.useState(1);
  const img = "https://cdn.logo.com/hotlink-ok/logo-social.png";
  console.log(comp);

  return (
    <div className="w-full h-screen flex flex-col justify-between items-center bg-red-400 text-white">
      <NavBar logo={img} funct_prop={setComp} />
      {comp === "Home" && <Home />}
      {comp === "About" && <About />}
      <div>Footer</div>
    </div>
  );
}

export default App;
