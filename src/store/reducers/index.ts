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
  uncxHistory,
  ethPriceSelect
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
  uncxHistory,
  ethPriceSelect
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
