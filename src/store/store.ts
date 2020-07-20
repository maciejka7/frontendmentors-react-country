import
{ configureStore, combineReducers , ThunkAction, Action } from "@reduxjs/toolkit";
import country from "./country.slice";
import details from './details.slice';

import {
  TypedUseSelectorHook,
  useSelector as useTypedSelector
} from "react-redux";

const rootReducer = combineReducers({
  country,
  details
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
export const useSelector: TypedUseSelectorHook<AppState> = useTypedSelector;

export default store;
