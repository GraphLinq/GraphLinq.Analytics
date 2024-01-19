import { combineReducers } from "redux";
import {
  glqSelect,
  glqHistory,
  //unclSelect,
  uncxSelect,
  //liquiditySelect,
  //totalLiquiditySelect,
  postGlqTradesSelect,
  postUncxTradesSelect,
  uncxHistory,
  ethPriceSelect,
  polygonSelect,
} from "./glqReducers";

const rootReducer = combineReducers({
  glqSelect,
  glqHistory,
  //unclSelect,
  uncxSelect,
  //liquiditySelect,
  //totalLiquiditySelect,
  postGlqTradesSelect,
  postUncxTradesSelect,
  uncxHistory,
  ethPriceSelect,
  polygonSelect,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
