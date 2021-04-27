export const glqSelect = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_SELECTED_GLQ_SUCCESS":
        return action.payLoad;
    default:
        return state;
  }
}

export const unclSelect = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_SELECTED_UNCL_SUCCESS":
        return action.payLoad;
    default:
        return state;
  }
}

export const uncxSelect = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_SELECTED_UNCX_SUCCESS":
        return action.payLoad;
    default:
        return state;
  }
}

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
