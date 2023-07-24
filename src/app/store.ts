import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import routesReducer, { routesWatcher } from "../entities/routes";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware({
  onError: (e) => console.error(e),
});

export const store = configureStore({
  reducer: {
    routes: routesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

function* rootWatcher() {
  yield all([routesWatcher()]);
}
sagaMiddleware.run(rootWatcher);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
