import CategoryTabs from "./CategoryTabs";
import Banner from "../../components/Banner";
import ContentList from "../../components/content-list";
import "../../styles/category-page.scss";

const CategoryPage = () => {
  return (
    <div className="category-page">
      <div className="category-header">
        <CategoryTabs />
        <Banner />
      </div>
      <div className="category-content">
        <ContentList />
      </div>
    </div>
  );
};

export default CategoryPage;
