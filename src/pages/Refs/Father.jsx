import React, { useEffect, useRef } from 'react';
import Child from './Child';

const Father = () => {
  const ref = useRef(null);
  console.log(Child.test)
  useEffect(() => {
    console.log(ref.current)
    ref.current.focus()
  })
  return (
    <div>
      <Child ref={ref}>sdfsadfsdfs</Child>
    </div>
  );
}

export default Father
 