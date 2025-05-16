import { useEffect, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { NewsFetchResult, NewsMeta } from "../../types/data";
import "../../styles/content-list.scss";

const NEWS_ITEM_HEIGHT = 135;
const ITEM_GAP = 20;

const NewsList = () => {
  const [newsData, setNewsData] = useState<NewsMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/mock/newsData.json");
        const data: NewsFetchResult = await response.json();
        setNewsData(data.resultData.map((item) => item.meta));
      } catch (error) {
        console.error("뉴스 데이터를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: newsData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => NEWS_ITEM_HEIGHT + ITEM_GAP,
    overscan: 10,
  });

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="content-list" ref={parentRef}>
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const news = newsData[virtualRow.index];
          return (
            <div
              key={virtualRow.index}
              className="content-item news-item"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
              }}
              onClick={() =>
                window.open(
                  `https://hanteonews.com/ko/article/culture?fc=${news.originIdx}`,
                  "_blank"
                )
              }
            >
              <img
                src={news.content.thumbnail}
                alt={news.content.title}
                className="news-thumb"
              />
              <div className="news-content">
                <div className="title">{news.content.title}</div>
                <div className="seo">{news.content.seo}</div>
                <div className="date">
                  {new Date(news.modifyDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
