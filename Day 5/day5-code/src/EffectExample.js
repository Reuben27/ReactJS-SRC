import React, { useEffect, useState } from "react";

function EffectExample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    count > 5 && console.log("count is greater than 5");
  }, [count]);
  return (
    <div className="w-screen h-screen items-center justify-center bg-yellow-100 flex flex-col gap-4">
      <h1 className="text-xl font-bold">useEffect - Example</h1>
      <h1 className="text-5xl font-bold">{count}</h1>
      <div className="flex flex-row gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="p-2 bg-gradient-to-br from-red-400 to-red-600"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="p-2 bg-gradient-to-br text-white from-blue-400 to-blue-600"
        >
          reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="p-2 bg-gradient-to-br from-green-400 to-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default EffectExample;
