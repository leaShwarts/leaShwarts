import { CommonState, commonReducer, selectIsLoading,  } from "./shared/state/state.index";
import { createSelector } from "@ngrx/store";

const reducers = {
    common: commonReducer,
};

interface AppState {
    common: CommonState
}

export { reducers, AppState };

export const selectCommon = (state) => state.common;
export const selectLoadingCommonState = createSelector(selectCommon, selectIsLoading)





