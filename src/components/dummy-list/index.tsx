import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import ListItemSkeleton from "./ListItemSkeleton";
import "../../styles/content-list.scss";

interface DummyListProps {
  count?: number;
  itemHeight?: number;
  title?: string;
}

const DummyList = ({ count = 8, itemHeight = 135, title }: DummyListProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const ITEM_GAP = 20;

  const rowVirtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight + ITEM_GAP,
    overscan: 10,
  });

  return (
    <div className="content-list" ref={parentRef}>
      <div
        style={{
          height: rowVirtualizer.getTotalSize(),
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <ListItemSkeleton height={itemHeight} title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyList;
