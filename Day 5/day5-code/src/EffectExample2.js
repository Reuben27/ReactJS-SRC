import React, { useEffect, useState } from "react";
import Component from "./Component";

function EffectExample2() {
  const [mount, setMount] = useState(false);
  return (
    <div className="w-screen h-screen items-center justify-center bg-yellow-100 flex flex-col gap-4">
      <h1 className="text-xl font-bold">useEffect Example 2</h1>
      {mount && <Component />}
      <button
        onClick={() => setMount(!mount)}
        className="p-1 text-white bg-blue-500"
      >
        {mount ? "Unmount component" : "Mount component"}
      </button>
    </div>
  );
}

export default EffectExample2;
