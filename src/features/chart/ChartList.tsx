import { useState, useEffect, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { ChartFetchResult, ChartItem } from "../../types/data";
import "../../styles/content-list.scss";

const ITEM_HEIGHT = 80;
const ITEM_GAP = 10;

const ChartList = () => {
  const [chartData, setChartData] = useState<ChartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const response = await fetch("/mock/chartData.json");
        const data: ChartFetchResult = await response.json();
        setChartData(data.resultData.list);
      } catch (error) {
        console.error("차트 데이터를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChart();
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: chartData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ITEM_HEIGHT + ITEM_GAP,
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
          const chart = chartData[virtualRow.index];
          return (
            <div
              key={virtualRow.index}
              className="content-item chart-item"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <div className="rank">{chart.rank}</div>
              <img
                className="chart-thumb"
                src={`https://resource.hanteochart.io${chart.targetImg}`}
                alt={chart.targetName}
              />
              <div className="title">
                {chart.targetName}
                <div className="artist">{chart.detail.artistGlobalName}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartList;
