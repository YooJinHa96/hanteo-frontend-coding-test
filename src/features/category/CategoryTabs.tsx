import { useNavigate, useParams } from "react-router-dom";
import "../../styles/category-tabs.scss";

const categories = [
  { id: "CHART", name: "차트" },
  { id: "Whook", name: "Whook" },
  { id: "event", name: "이벤트" },
  { id: "news", name: "뉴스" },
  { id: "store", name: "스토어" },
  { id: "charge", name: "충전소" },
];

const CategoryTabs = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  return (
    <nav className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={String(cat.id) === categoryId ? "active" : ""}
          onClick={() => navigate(`/category/${cat.id}`)}
        >
          {cat.name}
        </button>
      ))}
    </nav>
  );
};

export default CategoryTabs;
