import { createAction, props } from '@ngrx/store'
import { AuthData } from 'app/shared/model/auth-data.model';
import { User } from 'app/shared/model/user.model';

export const setUser = createAction('[Auth Service] Login', props<{ user: User }>());
export const setAuthData = createAction('[Auth Service] Token', props<{ authData: AuthData }>());
export const clearUserAuthData = createAction('[Auth Service] Logout');

