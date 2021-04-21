import { combineReducers } from 'redux';
import { glqSelect, unclSelect, uncxSelect } from './glqReducers';

// export default combineReducers({
//     glqSelect,
//     unclSelect,
//     uncxSelect
// })

const rootReducer = combineReducers({
    glqSelect,
    unclSelect,
    uncxSelect
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer