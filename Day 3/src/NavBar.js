import React from "react";

function NavBar({ logo, funct_prop }) {
  const elements = ["Home", "About", "Contact"];
  return (
    <div className="h-12 bg-white items-center text-black justify-around flex flex-row w-full">
      {logo ? <img className="h-full" src={logo} alt="" /> : <></>}
      {elements.map((item) => (
        <h1
          className="hover:bg-indigo-400 p-2 cursor-pointer hover:text-white"
          onClick={() => funct_prop(item)}
        >
          {item}
        </h1>
      ))}
    </div>
  );
}

export default NavBar;
