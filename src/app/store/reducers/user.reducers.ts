import { EUserActions } from './../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import {initialUserState, IUserState } from '../state/user.state';
import { ActionsSubject } from '@ngrx/store';

export function userReducers(
    state = initialUserState,
    action: UserActions
){
    switch(action.type) {
        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }
        default: 
        return state;
    }
};