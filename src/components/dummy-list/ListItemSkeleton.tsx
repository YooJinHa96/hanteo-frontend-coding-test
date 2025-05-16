interface ListItemSkeletonProps {
  height?: number;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  title?: string;
}

const ListItemSkeleton = ({
  height = 135,
  thumbnailWidth = 120,
  thumbnailHeight = 80,
  title = "카테고리",
}: ListItemSkeletonProps) => {
  return (
    <div
      className="content-item"
      style={{
        display: "flex",
        marginBottom: 20,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 1px 8px #eee",
        padding: 16,
        alignItems: "center",

        height,
      }}
    >
      <div
        style={{
          width: thumbnailWidth,
          height: thumbnailHeight,
          background: "#bbb",
          borderRadius: 8,
          marginRight: 16,
        }}
      />
      <div style={{ flex: 1 }}>
        <span className="title">{title} 준비중</span>
      </div>
    </div>
  );
};

export default ListItemSkeleton;
