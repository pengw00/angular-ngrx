import { RouterReducerState } from '@ngrx/router-store';

import { IUserState, initialUserState } from './user.state';
import {initialConfigState, IConfigState } from './config.state';


// The application state contains the user and config state, and also has the router state.
export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
}

export const initialAppState: IAppState = {
    users: initialUserState,
    config: initialConfigState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}

