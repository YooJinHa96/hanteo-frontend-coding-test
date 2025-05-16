import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CategoryPage from "../features/category/CategoryPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/category/CHART" />} />
        <Route path="/category" element={<Navigate to="/category/CHART" />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
