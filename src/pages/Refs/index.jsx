import React from "react";

const FancyButton = React.forwardRef((props, ref) => {
  // console.log(props);
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  );
});

class Refs extends React.PureComponent {
  render() {
    // 你可以直接获取 DOM button 的 ref：
    const ref = React.createRef();
    // console.log(ref);
    return <FancyButton ref={ref}>Refs</FancyButton>;
  }
}
export default Refs;
