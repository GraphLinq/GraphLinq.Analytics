import { combineReducers } from "redux";
import {
  glqSelect,
  glqHistory,
  unclSelect,
  uncxSelect,
  liquiditySelect,
  totalLiquiditySelect,
} from "./glqReducers";

const rootReducer = combineReducers({
  glqSelect,
  glqHistory,
  unclSelect,
  uncxSelect,
  liquiditySelect,
  totalLiquiditySelect,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
