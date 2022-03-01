

import * as SharedCommonActions from '../actions/‏‏shared-common.action';
import { createReducer, on, Action } from '@ngrx/store';

export class SharedCommonState {
    isLoading: boolean;
}
let initialState: SharedCommonState = {
    isLoading: false,
}

const createSharedCommonReducer = createReducer(
    initialState,
    on(SharedCommonActions.setIsLoading, (state, { isLoading }) => {
        return {
            ...state, isLoading
        };
    }),
);

export function SharedCommonReducer(state: SharedCommonState | undefined, action: Action) {
    return createSharedCommonReducer(state, action);
}

