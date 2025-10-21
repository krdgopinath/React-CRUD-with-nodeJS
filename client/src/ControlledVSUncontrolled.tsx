import React, { useRef } from 'react';

const ControlledVSUncontrolled = () => {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameRef.current.value}`);  // Direct DOM access
  };

  return (
    <>
     <p>In a controlled component, the form data is handled by React state (Usestate).you are familar with that.  In uncontrolled, it is handled by DOM itself</p>
    here we are explaining only uncontrolled
    <form onSubmit={handleSubmit}>
      <label>Enter Name:</label>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default ControlledVSUncontrolled;
