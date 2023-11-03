import React, { Component } from "react";
const Component1 = () => <div>Number is greater than 5</div>;
const Component2 = () => <div>Number is less than 5</div>;
function ConditionalRender() {
  const A = prompt("Enter a number");
  return (
    <div className="w-screen h-screen items-center justify-center bg-yellow-100 flex flex-col gap-4">
      <h1 className="text-xl font-bold">ConditionalRender - Example</h1>
      {/* {A > 5 ? <Component1 /> : <Component2 />} */}
      {A > 5 && <Component1 />}
    </div>
  );
}

export default ConditionalRender;
