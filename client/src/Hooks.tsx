import React, { useEffect, useState } from 'react'
import  UseMemoHooks from './UseMemoHooks';
import UseRefHooks from './UseRefHooks';
const Hooks = () => {

  const [count, setCount]=useState(0);
  useEffect(()=>{
    console.log("Hellow")
  },[])

  return (
    <div>
      <h2>UseEffect</h2>
      <p>useEffect is a React Hook that lets you perform side effects in functional components.<br/>
            Fetching data from an API<br/>

            Updating the DOM manually<br/>

            Setting up timers (e.g., setTimeout, setInterval)<br/>

            Listening for browser events<br/>
            Dependency array	When it runs
         <pre>
        <code>
          useEffect(() =&gt; &#123; ... &#125;) — On every render{"\n"}
          useEffect(() =&gt; &#123; ... &#125;, []) — Only on mount (first render){"\n"}
          useEffect(() =&gt; &#123; ... &#125;, [count]) — On mount + when count changes
        </code>
      </pre>
        </p>
        <button type='button'  style={{marginBottom:'30px'}} onClick={()=> setCount(count+1)}>Click me</button><br/>
        {count}
        <h2>UseState</h2>
        <p>useState is a React Hook that lets you create and manage state in a functional component.
            Think of it as a variable that remembers its value between re-renders. <br/>
            Use useState when you need to:<br/>
            Track form inputs (e.g., username, password)<br/>
            Manage toggles (e.g., show/hide modal)<br/>
            Handle counters or step indicators<br/>
            Store temporary UI data </p><br/>
        <h2>Use memo</h2>
        <p>⚖️ Difference Table
Feature	- useMemo	- useEffect
Purpose-	Memoize (cache) computed value -	Run side effects after render
Returns -	A value -	Nothing (optionally cleanup function)
When runs	 -During render (before paint) -	After render (after paint)
Use cases	 -Expensive calculations, derived data	 -Fetch data, update DOM, API calls, event listeners
Performance -	Prevents unnecessary recalculations	Controls  -when side effects occur
Cleanup	 -❌ No cleanup	 -✅ Can have cleanup function</p>
 <UseMemoHooks />
        <h2>Use Ref</h2>
        <p>useRef is a React Hook that lets you create a reference to a DOM element or persist a mutable value that doesn’t trigger re-renders.</p>
        <UseRefHooks />

        <h2></h2>
    </div>
   
  )
}

export default Hooks
