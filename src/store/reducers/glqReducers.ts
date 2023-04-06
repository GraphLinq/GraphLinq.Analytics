export const glqSelect = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_SELECTED_GLQ_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};

export const polygonSelect = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_SELECTED_POLYGON_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};

export const glqHistory = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_HISTORY_GLQ_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};

export const uncxSelect = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_SELECTED_UNCX_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};

export const liquiditySelect = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_LIQUIDITY_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};

export const totalLiquiditySelect = (state = [], action: any) => {
  switch (action.type) {
    case "POST_TOTAL_LIQUIDITY_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};

export const postGlqTradesSelect = (state = [], action: any) => {
  switch (action.type) {
    case "POST_GLQ_TRADES_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};

export const postUncxTradesSelect = (state = [], action: any) => {
  switch (action.type) {
    case "POST_UNCX_TRADES_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};

export const uncxHistory = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_HISTORY_UNCX_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};

export const ethPriceSelect = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_SELECTED_ETH_PRICE_SUCCESS":
      return action.payLoad;
    default:
      return state;
  }
};
