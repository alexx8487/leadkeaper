import { configureStore } from "@reduxjs/toolkit";

import { members } from "./services/members";

const store = configureStore({
  reducer: {
    [members.reducerPath]: members.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(members.middleware),
});

export default store;
