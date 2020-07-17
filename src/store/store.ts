import { configureStore, combineReducers } from "@reduxjs/toolkit";
import country from "./country.slice";

import {
  TypedUseSelectorHook,
  useSelector as useTypedSelector
} from "react-redux";

const rootReducer = combineReducers({
  country
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<AppState> = useTypedSelector;

export default store;
