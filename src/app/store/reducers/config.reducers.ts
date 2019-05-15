import { ConfigActions, EConfigActions } from '../actions/config.actions';
import { initialConfigState, IConfigState } from '../state/config.state';

export function configReducers(
    state = initialConfigState,
    action: ConfigActions
){
    switch(action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state, 
                config: action.payload
            };
        }
        default: 
        return state;
    }
};