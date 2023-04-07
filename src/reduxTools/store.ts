import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import thunkMiddleware from "redux-thunk";
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

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "register"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunkMiddleware),
});

const persistor = persistStore(store);

type GlobalState = ReturnType<typeof store.getState>;
type GlobalDispatch = typeof store.dispatch;

export { store, persistor };
export type { GlobalState, GlobalDispatch };
