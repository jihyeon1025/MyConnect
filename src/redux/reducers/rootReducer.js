import { combineReducers } from "redux";
import testReducer from "./testReducer";
//여러개의 리듀서 관리

const rootReducer = combineReducers({
  test: testReducer, // 리듀서 추가
});

export default rootReducer;
