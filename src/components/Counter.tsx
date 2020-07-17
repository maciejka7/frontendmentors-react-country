import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useSelector } from "../store/store";
import { inc, dec } from "../store/countSlice";

const Counter: React.FC = () => {
  const count: number = useSelector(state => state.count);
  const dispatch: AppDispatch = useDispatch();

  const onInc = () => dispatch(inc());
  const onDec = () => dispatch(dec());

  return (
    <div>
      <p>Count is {count}</p>
      <div>
        <button onClick={onInc}>Increment</button>
        <button onClick={onDec}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
