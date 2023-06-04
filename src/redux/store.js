
import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import authSlice from "./Features/authSlice";
import postSlice from "./Features/postSlice";


const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    auth: authSlice,
    posts: postSlice
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;









