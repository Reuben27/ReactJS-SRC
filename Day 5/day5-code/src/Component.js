import React, { useEffect } from "react";

function Component() {
  useEffect(() => {
    console.log("Component is mounted");
    return () => {
      console.log("Component is un-mounted");
    };
  }, []);
  return (
    <div className="p-4 border border-orange-400 bg-orange-200">Component</div>
  );
}

export default Component;
