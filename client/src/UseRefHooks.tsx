import React, { useRef } from "react";

function UseRefHooks() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // focuses the input field
  };

  return (
    <div>
      <h3>useRef Example - DOM Access</h3>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default UseRefHooks;
