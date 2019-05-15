import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IConfigState } from '../state/config.state';
//it is data transformation in selector, so just return slice of the store
const configState = (state: IAppState) => state.config;
// this first parameter is the slice of the store
//the second param id the slice of the store 
export const selectConfig = createSelector(
  configState,
  (state: IConfigState) => state.config
);