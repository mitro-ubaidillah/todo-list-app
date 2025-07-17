import { todoApi } from "@/services/todos";
import { Action, combineReducers, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

interface HydrateAction extends PayloadAction<RootState> {
  type: typeof HYDRATE;
}

function isHydrateAction(action: Action): action is HydrateAction {
  return action.type === HYDRATE;
}


export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: (state, action) => {
      if (isHydrateAction(action)) {
        return {
          ...state,
          ...action.payload
        };
      } else {
        return rootReducer(state, action);
      }
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
    preloadedState
  });

  return store;
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];