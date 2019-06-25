import React from "react";
import Father from './Father'

// const FancyButton = React.forwardRef((props, ref) => {
//   return (
//     <div ref={ref} className="FancyButton">
//       {props.children}
//     </div>
//   )
// })

// class Refs extends React.PureComponent {
//   render() {
//     // 你可以直接获取 DOM button 的 ref：
//     const ref = React.createRef();
//     console.log(ref);
//     return <Father>Refs</Father>;
//   }
// }

const Refs = () => {
  // const ref = React.createRef();

  return (
    <div>
      {/* <FancyButton ref={ref}>Refs</FancyButton> */}
      <Father></Father>
    </div>
  )
}
export default Refs;
