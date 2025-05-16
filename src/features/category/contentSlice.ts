import { createSlice } from "@reduxjs/toolkit";

// 카테고리별 mock 데이터
const mockContents: Record<number, { id: number; title: string }[]> = {
  1: Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    title: `차트 콘텐츠 ${i + 1}`,
  })),
  2: Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: `Whook 콘텐츠 ${i + 1}`,
  })),
  3: Array.from({ length: 15 }).map((_, i) => ({
    id: i + 1,
    title: `이벤트 콘텐츠 ${i + 1}`,
  })),
  4: Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `뉴스 콘텐츠 ${i + 1}`,
  })),
  5: Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: `스토어 콘텐츠 ${i + 1}`,
  })),
  6: Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    title: `충전소 콘텐츠 ${i + 1}`,
  })),
};

interface ContentState {
  contents: Record<number, { id: number; title: string }[]>;
}

const initialState: ContentState = {
  contents: mockContents,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
});

export default contentSlice.reducer;
