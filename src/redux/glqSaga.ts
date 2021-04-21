import * as Effects from "redux-saga/effects";

import * as initialActions from '../store/actionNames/glqAction';
// import axios from 'axios';
import {postGlqSelectInfo} from '../api/glqAPI';
import {postUnclSelectInfo} from '../api/unclAPI';
import {postUncxSelectInfo} from '../api/uncxAPI';

const call: any = Effects.call;
const put: any = Effects.put;
const takeEvery: any = Effects.takeEvery;
// const takeLatest: any = Effects.takeLatest;

function* postGlqSelect(action:any) {
    try {
        const glqSelectInfo: ReturnType<typeof postGlqSelectInfo> = yield call(postGlqSelectInfo, action.payLoad);
        yield put({type: "POST_SELECTED_GLQ", payLoad: glqSelectInfo});
    } catch (e) {
        yield put({type: "POST_SELECTED_GLQ_FAILED"});
    }
}

function* postUnclSelect(action:any) {
    try {
        const unclSelectInfo: ReturnType<typeof postUnclSelectInfo> = yield call(postUnclSelectInfo, action.payLoad);
        yield put({type: "POST_SELECTED_UNCL", payLoad: unclSelectInfo});
    } catch (e) {
        yield put({type: "POST_SELECTED_UNCL_FAILED"});
    }
}

function* postUncxSelect(action:any) {
    try {
        const uncxSelectInfo: ReturnType<typeof postUncxSelectInfo> = yield call(postUncxSelectInfo, action.payLoad);
        yield put({type: "POST_SELECTED_UNCX", payLoad: uncxSelectInfo});
    } catch (e) {
        yield put({type: "POST_SELECTED_UNCX_FAILED"});
    }
}

export default function* mySaga() {
  yield takeEvery(initialActions.POST_SELECTED_GLQ, postGlqSelect);
  yield takeEvery(initialActions.POST_SELECTED_UNCL, postUnclSelect);
  yield takeEvery(initialActions.POST_SELECTED_UNCX, postUncxSelect);
}
