import { createAction, props } from '@ngrx/store'

export const setIsLoading = createAction('[Common Service] IsLoading', props<{ isLoading: boolean }>());