import React, { useReducer } from "react";

const initialCount = 0;

function init() {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "rest":
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <section>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "rest", payload: initialCount })}>
        rest
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </section>
  );
}
