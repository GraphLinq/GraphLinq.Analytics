import { combineReducers } from "redux";
import {
  glqSelect,
  unclSelect,
  uncxSelect,
  liquiditySelect,
  totalLiquiditySelect,
} from "./glqReducers";

const rootReducer = combineReducers({
  glqSelect,
  unclSelect,
  uncxSelect,
  liquiditySelect,
  totalLiquiditySelect,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
