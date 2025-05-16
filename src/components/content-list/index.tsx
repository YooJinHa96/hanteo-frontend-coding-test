import { useParams } from "react-router-dom";
import ChartList from "../../features/chart/ChartList";
import NewsList from "../../features/news/NewsList";
import DummyList from "../../components/dummy-list";

const ContentList = () => {
  const { categoryId } = useParams();

  if (categoryId === "CHART") return <ChartList />;
  if (categoryId === "news") return <NewsList />;
  if (["Whook", "event", "store", "charge"].includes(categoryId as string))
    return <DummyList title={categoryId} />;

  return null;
};

export default ContentList;
