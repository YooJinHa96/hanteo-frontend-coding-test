import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { id: 1, name: "차트" },
    { id: 2, name: "Whook" },
    { id: 3, name: "이벤트" },
    { id: 4, name: "뉴스" },
    { id: 5, name: "스토어" },
    { id: 6, name: "충전소" },
  ],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
