import React, { useEffect, useMemo, useState } from "react";

const CompareExample = () => {
  const [count, setCount] = useState(0);

  // useMemo → caching a value
  const double = useMemo(() => {
    console.log("Calculating double...");
    return count * 2;
  }, [count]);

  // useEffect → side effect when count changes
  useEffect(() => {
    console.log("useEffect triggered!");
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>useMemo vs useEffect</h2>
      <p>Count: {count}</p>
      <p>Double (useMemo): {double}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default CompareExample;
