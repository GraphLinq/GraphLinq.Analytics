import { combineReducers } from "redux";
import {
  glqSelect,
  glqHistory,
  unclSelect,
  uncxSelect,
  liquiditySelect,
  totalLiquiditySelect,
  postGlqTradesSelect,
  postUncxTradesSelect,
  uncxHistory
} from "./glqReducers";

const rootReducer = combineReducers({
  glqSelect,
  glqHistory,
  unclSelect,
  uncxSelect,
  liquiditySelect,
  totalLiquiditySelect,
  postGlqTradesSelect,
  postUncxTradesSelect,
  uncxHistory
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
