import { combineReducers } from "redux";
import {
  glqSelect,
  glqHistory,
  unclSelect,
  uncxSelect,
  liquiditySelect,
  totalLiquiditySelect,
  postGlqTradesSelect
} from "./glqReducers";

const rootReducer = combineReducers({
  glqSelect,
  glqHistory,
  unclSelect,
  uncxSelect,
  liquiditySelect,
  totalLiquiditySelect,
  postGlqTradesSelect
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
