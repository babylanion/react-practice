import React from 'react';
import Child from './Child';

const Father = () => {
  const ref = React.createRef ();
  console.log(Child.test)
  return (
    <div>
      <Child>sdfsadfsdfs</Child>
    </div>
  );
}

export default Father;
