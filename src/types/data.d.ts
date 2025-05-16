// 차트 아이템 타입
export interface ChartItem {
  targetImg: string;
  targetName: string;
  detail: {
    artistGlobalName: string;
  };
  rank: number;
}

// 뉴스 아이템 타입 (meta)
export interface NewsMeta {
  password: string | null;
  description: string | null;
  editType: string | null;
  writeDate: string | null;
  language: string;
  originIdx: number;
  isShare: number;
  content: {
    idx: number;
    version: number;
    thumbnail: string;
    title: string;
    description: string | null;
    seo: string;
    extraJson: string | null;
    externalLink: string | null;
    writeDate: string | null;
    user: unknown;
    thumbnailWidth: number;
    thumbnailHeight: number;
  };
  user: {
    idx: number;
    client: unknown;
    userName: string;
    userEmail: string;
    extraJson: string;
    listOfParent: unknown;
    listOfChild: unknown;
  };
  startDate: string;
  modifyDate: string;
}

// 차트 fetch 결과 타입
export interface ChartFetchResult {
  resultData: {
    list: ChartItem[];
  };
}

// 뉴스 fetch 결과 타입
export interface NewsFetchResult {
  resultData: Array<{ meta: NewsMeta }>;
}
