import { useState } from "react";
import useLocalStorage from "./LocalStorage";

function LocalStorageComponent() {
  //const [name, setName] = useState("");
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className="w-screen h-screen items-center justify-center bg-yellow-100 flex flex-col gap-4">
      <h1 className="text-xl font-bold">Custom Hook Example</h1>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          className="border border-yellow-400 py-0.5 px-2"
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <p>Hello, {name || "Stranger"}!</p>
    </div>
  );
}

export default LocalStorageComponent;
