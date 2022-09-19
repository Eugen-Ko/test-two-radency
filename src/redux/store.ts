import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoSlices } from "redux/todo/todoSlices";

const persistConfig = {
  key: "todo",
  storage,
};

// const rootReducer = combineReducers({ todo: todoSlices });

const persistedReducer = persistReducer(persistConfig, todoSlices.reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

// export type RootState = ReturnType<typeof store.getState>;
