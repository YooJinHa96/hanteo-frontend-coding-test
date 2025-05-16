import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import contentReducer from "../features/category/contentSlice";
import bannerReducer from "../features/category/bannerSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    content: contentReducer,
    banner: bannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
