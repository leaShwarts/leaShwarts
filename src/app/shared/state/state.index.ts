import { ActionReducer, combineReducers } from "@ngrx/store";
import { SharedCommonState, SharedCommonReducer } from "./reducers/‏‏shared-common.reducer";

const reducers = {
    commonState: SharedCommonReducer,
};

interface CommonState {
    commonState: SharedCommonState;
}

const reducer: ActionReducer<CommonState> = combineReducers(reducers);

function commonReducer(state: any, action: any) {
    return reducer(state, action);
}

export { commonReducer, CommonState };

// export selectors
export const selectIsLoading = (state: CommonState) => state.commonState.isLoading;
