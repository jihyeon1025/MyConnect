import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment2, decrement } from "../redux/actions/action.js";

function Test() {
  const count = useSelector((state) => state.test.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>카운트: {count}</p>

      <button onClick={() => dispatch(increment2())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
    </div>
  );
}

export default Test;
