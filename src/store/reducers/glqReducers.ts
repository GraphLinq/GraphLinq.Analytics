
export const glqSelect = (state = {}, action: any) => {
    switch (action.type) {
        case "POST_SELECTED_GLQ":
            return action.payLoad;
        default:
            return state;
    }
}

export const unclSelect = (state = {}, action: any) => {
    switch (action.type) {
        case "POST_SELECTED_UNCL":
            return action.payLoad;
        default:
            return state;
    }
}

export const uncxSelect = (state = {}, action: any) => {
    switch (action.type) {
        case "POST_SELECTED_UNCX":
            return action.payLoad;
        default:
            return state;
    }
}