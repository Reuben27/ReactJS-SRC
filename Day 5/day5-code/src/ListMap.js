import React from "react";

function ListMap() {
  const Fruits = ["apple", "banana", "mango", "water melon"];
  return (
    <div className="w-screen h-screen items-center justify-center bg-yellow-100 flex flex-col gap-4">
      <h1 className="text-xl font-bold">List Map -Example</h1>
      <ol>
        {Fruits.map((item, index) => (
          <li key={`list.item${item}`}>{index + 1 + ". " + item}</li>
        ))}
        {/* <li>{Fruits[0]}</li>
        <li>{Fruits[1]}</li>
        <li>{Fruits[2]}</li>
        <li>{Fruits[3]}</li> */}
      </ol>
    </div>
  );
}

export default ListMap;
