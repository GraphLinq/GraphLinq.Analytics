import * as Effects from "redux-saga/effects";
import * as initialActions from "../store/actionNames/glqAction";
import axios from "axios";
import { postGlqSelectInfo } from "../api/glqAPI";
import { postGlqHistoryInfo } from "../api/glqHistoryAPI";
import { postUnclSelectInfo } from "../api/unclAPI";
import { postUncxSelectInfo } from "../api/uncxAPI";
import { postLiquiditySelectInfo } from "../api/liquidityAPI";
import { postTotalLiquiditySelectInfo } from "../api/totalLiquidityAPI";
import { postGlqTradesSelectInfo } from "../api/glqTradeAPI";
import { postUncxTradesSelectInfo } from "../api/uncxTradeAPI";
import { postUncxHistoryInfo } from "../api/uncxHistoryAPI";
import { postEthPriceSelectInfo } from "../api/ethPriceAPI";

const call: any = Effects.call;
const put: any = Effects.put;
const takeEvery: any = Effects.takeEvery;
const takeLatest: any = Effects.takeLatest;

function delay(duration: number) {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(true), duration);
  });
  return promise;
}

function* postGlqSelect(action: any) {
  while (true) {
    try {
      const glqSelectInfo: ReturnType<typeof postGlqSelectInfo> = yield call(
        postGlqSelectInfo,
        action.payLoad
      );
      yield put({ type: "POST_SELECTED_GLQ_SUCCESS", payLoad: glqSelectInfo });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_SELECTED_GLQ_FAILED" });
    }
  }
}

function* postGlqHistory(action: any) {
  while (true) {
    try {
      const glqHistoryInfo: ReturnType<typeof postGlqHistoryInfo> = yield call(
        postGlqHistoryInfo,
        action.payLoad
      );
      yield put({ type: "POST_HISTORY_GLQ_SUCCESS", payLoad: glqHistoryInfo });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_HISTORY_GLQ_FAILED" });
    }
  }
}

function* postUnclSelect(action: any) {
  while (true) {
    try {
      const unclSelectInfo: ReturnType<typeof postUnclSelectInfo> = yield call(
        postUnclSelectInfo,
        action.payLoad
      );
      yield put({ type: "POST_SELECTED_UNCL_SUCCESS", payLoad: unclSelectInfo });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_SELECTED_UNCL_FAILED" });
    }
  }
}

function* postUncxSelect(action: any) {
  while (true) {
    try {
      const uncxSelectInfo: ReturnType<typeof postUncxSelectInfo> = yield call(
        postUncxSelectInfo,
        action.payLoad
      );
      yield put({ type: "POST_SELECTED_UNCX_SUCCESS", payLoad: uncxSelectInfo });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_SELECTED_UNCX_FAILED" });
    }
  }
}

function* postLiquiditySelect(action: any) {
  while (true) {
    try {
      const liquidityInfo: ReturnType<
        typeof postLiquiditySelectInfo
      > = yield call(postLiquiditySelectInfo, action.payLoad);
      yield put({ type: "POST_LIQUIDITY_SUCCESS", payLoad: liquidityInfo });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_LIQUIDITY_FAILED" });
    }
  }
}

function* postTotalLiquiditySelect(action: any) {
  while (true) {
    try {
      const totalLiquidityInfo: ReturnType<
        typeof postTotalLiquiditySelectInfo
      > = yield call(postTotalLiquiditySelectInfo, action.payLoad);
      yield put({
        type: "POST_TOTAL_LIQUIDITY_SUCCESS",
        payLoad: totalLiquidityInfo,
      });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_TOTAL_LIQUIDITY_FAILED" });
    }
  }
}

function* postGlqTradesSelect(action: any) {
  while (true) {
    try {
      const postGlqTradesInfo: ReturnType<
        typeof postGlqTradesSelectInfo
      > = yield call(postGlqTradesSelectInfo, action.payLoad);
      yield put({
        type: "POST_GLQ_TRADES_SUCCESS",
        payLoad: postGlqTradesInfo,
      });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_GLQ_TRADES_FAILED" });
    }
  }
}

function* postUncxTradesSelect(action: any) {
  while (true) {
    try {
      const postUncxTradesInfo: ReturnType<
        typeof postUncxTradesSelectInfo
      > = yield call(postUncxTradesSelectInfo, action.payLoad);
      yield put({
        type: "POST_UNCX_TRADES_SUCCESS",
        payLoad: postUncxTradesInfo,
      });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_UNCX_TRADES_FAILED" });
    }
  }
}

function* postUncxHistory(action: any) {
  while (true) {
    try {
      const uncxHistoryInfo: ReturnType<typeof postUncxHistoryInfo> = yield call(
        postUncxHistoryInfo,
        action.payLoad
      );
      yield put({ type: "POST_HISTORY_UNCX_SUCCESS", payLoad: uncxHistoryInfo });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_HISTORY_UNCX_FAILED" });
    }
  }
}

function* postEthPriceSelect(action: any) {
  while (true) {
    try {
      const ethPriceSelectInfo: ReturnType<typeof postEthPriceSelectInfo> = yield call(
        postEthPriceSelectInfo,
        action.payLoad
      );
      yield put({ type: "POST_SELECTED_ETH_PRICE_SUCCESS", payLoad: ethPriceSelectInfo });
      yield call(delay, 3000);
    } catch (e) {
      yield put({ type: "POST_SELECTED_ETH_PRICE_FAILED" });
    }
  }
}

export default function* mySaga() {
  yield takeLatest(initialActions.POST_SELECTED_GLQ, postGlqSelect);
  yield takeLatest(initialActions.POST_HISTORY_GLQ, postGlqHistory);
  yield takeLatest(initialActions.POST_SELECTED_UNCL, postUnclSelect);
  yield takeLatest(initialActions.POST_SELECTED_UNCX, postUncxSelect);
  yield takeLatest(initialActions.POST_LIQUIDITY, postLiquiditySelect);
  yield takeLatest(initialActions.POST_TOTAL_LIQUIDITY, postTotalLiquiditySelect);
  yield takeLatest(initialActions.POST_GLQ_TRADES, postGlqTradesSelect);
  yield takeLatest(initialActions.POST_UNCX_TRADES, postUncxTradesSelect);
  yield takeLatest(initialActions.POST_HISTORY_UNCX, postUncxHistory);
  yield takeLatest(initialActions.POST_SELECTED_ETH_PRICE, postEthPriceSelect);
}
