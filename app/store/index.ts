import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { authSliceReducer } from "./auth/auth.slice";
// import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "./customStorage";
import { loggerMiddleWare } from "./middleware/logger.middleware";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth"]
}

const rootReducer = combineReducers({
    auth: authSliceReducer
})

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedRootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(loggerMiddleWare),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;