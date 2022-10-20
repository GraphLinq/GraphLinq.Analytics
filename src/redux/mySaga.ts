import { all, call, put, takeLatest } from "redux-saga/effects";
import * as initialActions from "../store/actionNames/glqAction";
import { postGlqSelectInfo } from "../api/glqAPI";
import { postGlqHistoryInfo } from "../api/glqHistoryAPI";
//import { postUnclSelectInfo } from "../api/unclAPI";
import { postUncxSelectInfo } from "../api/uncxAPI";
//import { postLiquiditySelectInfo } from "../api/liquidityAPI";
//import { postTotalLiquiditySelectInfo } from "../api/totalLiquidityAPI";
import { postGlqTradesSelectInfo } from "../api/glqTradeAPI";
import { postUncxTradesSelectInfo } from "../api/uncxTradeAPI";
import { postUncxHistoryInfo } from "../api/uncxHistoryAPI";
import { postEthPriceSelectInfo } from "../api/ethPriceAPI";
import { postPolygonSelectInfo } from "../api/polygonAPI";

function delay(duration: number) {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(true), duration);
  });
  return promise;
}

function* postAll(action: any) {
  while (true) {
    try {
      const results: any[] = yield all([
        call(postGlqSelectInfo, action.payLoad),
        call(postGlqHistoryInfo, action.payLoad),
        call(postGlqTradesSelectInfo, action.payLoad),
        //call(postUnclSelectInfo, action.payLoad),
        call(postUncxSelectInfo, action.payLoad),
        //call(postLiquiditySelectInfo, action.payLoad),
        //call(postTotalLiquiditySelectInfo, action.payLoad),
        call(postUncxTradesSelectInfo, action.payLoad),
        call(postUncxHistoryInfo, action.payLoad),
        call(postEthPriceSelectInfo, action.payLoad),
        call(postPolygonSelectInfo, action.payload),
      ]);
      yield put({ type: "POST_SELECTED_GLQ_SUCCESS", payLoad: results[0] });
      yield put({ type: "POST_HISTORY_GLQ_SUCCESS", payLoad: results[1] });
      yield put({ type: "POST_GLQ_TRADES_SUCCESS", payLoad: results[2] });
      //yield put({ type: "POST_SELECTED_UNCL_SUCCESS", payLoad: results[3] });
      yield put({ type: "POST_SELECTED_UNCX_SUCCESS", payLoad: results[3] });
      //yield put({ type: "POST_LIQUIDITY_SUCCESS", payLoad: results[5] });
      //yield put({ type: "POST_TOTAL_LIQUIDITY_SUCCESS", payLoad: results[6] });
      yield put({ type: "POST_UNCX_TRADES_SUCCESS", payLoad: results[4] });
      yield put({ type: "POST_HISTORY_UNCX_SUCCESS", payLoad: results[5] });
      yield put({
        type: "POST_SELECTED_ETH_PRICE_SUCCESS",
        payLoad: results[6],
      });
      yield put({ type: "POST_SELECTED_POLYGON_SUCCESS", payLoad: results[7] });
      yield call(delay, 30000);
    } catch (e) {
      yield put({ type: "POST_SELECTED_GLQ_FAILED" });
      yield put({ type: "POST_HISTORY_GLQ_FAILED" });
      yield put({ type: "POST_GLQ_TRADES_FAILED" });
     // yield put({ type: "POST_SELECTED_UNCL_FAILED" });
      yield put({ type: "POST_SELECTED_UNCX_FAILED" });
      //yield put({ type: "POST_LIQUIDITY_FAILED" });
      //yield put({ type: "POST_TOTAL_LIQUIDITY_FAILED" });
      yield put({ type: "POST_UNCX_TRADES_FAILED" });
      yield put({ type: "POST_HISTORY_UNCX_FAILED" });
      yield put({ type: "POST_SELECTED_ETH_PRICE_FAILED" });
      yield put({ type: "POST SELECTED_POLYGON_FAILED" });
      yield call(delay, 30000);
    }
  }
}

function* postGlqAll(action: any) {
  while (true) {
    try {
      const results1: any[] = yield all([
        call(postGlqSelectInfo, action.payLoad),
        call(postGlqHistoryInfo, action.payLoad),
        call(postGlqTradesSelectInfo, action.payLoad),
        call(postEthPriceSelectInfo, action.payLoad),
      ]);
      yield put({ type: "POST_SELECTED_GLQ_SUCCESS", payLoad: results1[0] });
      yield put({ type: "POST_HISTORY_GLQ_SUCCESS", payLoad: results1[1] });
      yield put({ type: "POST_GLQ_TRADES_SUCCESS", payLoad: results1[2] });
      yield put({
        type: "POST_SELECTED_ETH_PRICE_SUCCESS",
        payLoad: results1[3],
      });
      yield call(delay, 30000);
    } catch (e) {
      yield put({ type: "POST_SELECTED_GLQ_FAILED" });
      yield put({ type: "POST_HISTORY_GLQ_FAILED" });
      yield put({ type: "POST_GLQ_TRADES_FAILED" });
      yield put({ type: "POST_SELECTED_ETH_PRICE_FAILED" });
      yield call(delay, 30000);
    }
  }
}



function* postPolygonAll(action: any) {
  while (true) {
    try {
      const results1: any[] = yield all([
        call(postPolygonSelectInfo, action.payLoad),
        //call(postGlqHistoryInfo, action.payLoad),
        //call(postGlqTradesSelectInfo, action.payLoad),
        call(postEthPriceSelectInfo, action.payLoad),
      ]);
      yield put({ type: "POST_SELECTED_GLQ_SUCCESS", payLoad: results1[0] });
      //yield put({ type: "POST_HISTORY_GLQ_SUCCESS", payLoad: results1[1] });
      //yield put({ type: "POST_GLQ_TRADES_SUCCESS", payLoad: results1[2] });
      yield put({
        type: "POST_SELECTED_ETH_PRICE_SUCCESS",
        payLoad: results1[3],
      });
      yield call(delay, 30000);
    } catch (e) {
      yield put({ type: "POST_SELECTED_GLQ_FAILED" });
      //yield put({ type: "POST_HISTORY_GLQ_FAILED" });
      //yield put({ type: "POST_GLQ_TRADES_FAILED" });
      yield put({ type: "POST_SELECTED_ETH_PRICE_FAILED" });
      yield call(delay, 30000);
    }
  }
}




function* postUncAll(action: any) {
  while (true) {
    try {
      const results2: any[] = yield all([
        //call(postUnclSelectInfo, action.payLoad),
        call(postUncxSelectInfo, action.payLoad),
        //call(postLiquiditySelectInfo, action.payLoad),
        //call(postTotalLiquiditySelectInfo, action.payLoad),
        call(postUncxTradesSelectInfo, action.payLoad),
        call(postUncxHistoryInfo, action.payLoad),
        call(postEthPriceSelectInfo, action.payLoad),
      ]);
      //yield put({ type: "POST_SELECTED_UNCL_SUCCESS", payLoad: results2[0] });
      yield put({ type: "POST_SELECTED_UNCX_SUCCESS", payLoad: results2[0] });
      //yield put({ type: "POST_LIQUIDITY_SUCCESS", payLoad: results2[2] });
      //yield put({ type: "POST_TOTAL_LIQUIDITY_SUCCESS", payLoad: results2[3] });
      yield put({ type: "POST_UNCX_TRADES_SUCCESS", payLoad: results2[1] });
      yield put({ type: "POST_HISTORY_UNCX_SUCCESS", payLoad: results2[2] });
      yield put({
        type: "POST_SELECTED_ETH_PRICE_SUCCESS",
        payLoad: results2[3],
      });
      yield call(delay, 30000);
    } catch (e) {
      //yield put({ type: "POST_SELECTED_UNCL_FAILED" });
      yield put({ type: "POST_SELECTED_UNCX_FAILED" });
      //yield put({ type: "POST_LIQUIDITY_FAILED" });
      //yield put({ type: "POST_TOTAL_LIQUIDITY_FAILED" });
      yield put({ type: "POST_UNCX_TRADES_FAILED" });
      yield put({ type: "POST_HISTORY_UNCX_FAILED" });
      yield put({ type: "POST_SELECTED_ETH_PRICE_FAILED" });
      yield call(delay, 30000);
    }
  }
}

export default function* mySaga() {
  yield takeLatest(initialActions.POST_SELECTED_ETH_PRICE, postAll);
  yield takeLatest(initialActions.POST_SELECTED_GLQ, postGlqAll);
  yield takeLatest(initialActions.POST_SELECTED_UNCL, postUncAll);
}
