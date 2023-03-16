import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeFeature/themeSlice";


export const store = configureStore({
  reducer: {
   theme: themeReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ReduxRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch