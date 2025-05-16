import { createSlice } from "@reduxjs/toolkit";

// 현재 시간을 기준으로 투표 상태를 계산하는 함수
const calculateVoteStatus = (startDate: string, endDate: string): string => {
  const now = new Date();
  const start = new Date(startDate.replace(/-/g, "/"));
  const end = new Date(endDate.replace(/-/g, "/"));

  if (now < start) {
    return "예정";
  }
  if (now > end) {
    return "종료";
  }

  return "진행중";
};

// 현재 시간을 기준으로 다음 주의 투표 일정을 계산하는 함수
const getNextWeekDates = () => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7; // 다음 금요일까지 남은 일수

  // 금요일 20:00 (쇼챔피언, 더쇼 시작)
  const nextFriday = new Date(now);
  nextFriday.setDate(now.getDate() + daysUntilFriday);
  nextFriday.setHours(20, 0, 0, 0);

  // 토요일 00:00 (엠카운트다운 시작)
  const nextSaturday = new Date(nextFriday);
  nextSaturday.setDate(nextFriday.getDate() + 1);
  nextSaturday.setHours(0, 0, 0, 0);

  // 일요일 15:00 (뮤직뱅크 시작)
  const nextSunday = new Date(nextFriday);
  nextSunday.setDate(nextFriday.getDate() + 2);
  nextSunday.setHours(15, 0, 0, 0);

  // 월요일 14:00 (더쇼, 쇼챔피언 종료)
  const nextMonday = new Date(nextFriday);
  nextMonday.setDate(nextFriday.getDate() + 3);
  nextMonday.setHours(14, 0, 0, 0);

  // 월요일 23:59 (엠카운트다운 종료)
  const nextMondayEnd = new Date(nextMonday);
  nextMondayEnd.setHours(23, 59, 59, 999);

  // 화요일 18:00 (음악중심 시작)
  const nextTuesday = new Date(nextFriday);
  nextTuesday.setDate(nextFriday.getDate() + 4);
  nextTuesday.setHours(18, 0, 0, 0);

  // 수요일 11:00 (뮤직뱅크 종료)
  const nextWednesday = new Date(nextFriday);
  nextWednesday.setDate(nextFriday.getDate() + 5);
  nextWednesday.setHours(11, 0, 0, 0);

  // 목요일 11:00 (음악중심 종료)
  const nextThursday = new Date(nextFriday);
  nextThursday.setDate(nextFriday.getDate() + 6);
  nextThursday.setHours(11, 0, 0, 0);

  // 다음주 금요일 23:59 (인기가요 종료)
  const nextNextFriday = new Date(nextFriday);
  nextNextFriday.setDate(nextFriday.getDate() + 7);
  nextNextFriday.setHours(23, 59, 59, 999);

  return {
    friday: nextFriday,
    saturday: nextSaturday,
    sunday: nextSunday,
    monday: nextMonday,
    mondayEnd: nextMondayEnd,
    tuesday: nextTuesday,
    wednesday: nextWednesday,
    thursday: nextThursday,
    nextFriday: nextNextFriday,
  };
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const getBanners = () => {
  const dates = getNextWeekDates();

  const banners = [
    {
      id: 1,
      image: "/banner/mcountdown.png",
      link: "https://poc.mnetplus.world/mcountdown/ko/play",
      title: "엠카운트다운 사전 투표",
      desc: `${formatDate(dates.saturday)} ~ ${formatDate(
        dates.mondayEnd
      )} (KST)`,
      status: calculateVoteStatus(
        formatDate(dates.saturday),
        formatDate(dates.mondayEnd)
      ),
    },
    {
      id: 2,
      image: "/banner/musicbank.webp",
      link: "https://program.kbs.co.kr/2tv/enter/musicbank/pc/index.html",
      title: "뮤직뱅크 사전 투표",
      desc: `${formatDate(dates.sunday)} ~ ${formatDate(
        dates.wednesday
      )} (KST)`,
      status: calculateVoteStatus(
        formatDate(dates.sunday),
        formatDate(dates.wednesday)
      ),
    },
    {
      id: 3,
      image: "/banner/musiccore.jpg",
      link: "https://program.imbc.com/musiccore",
      title: "쇼!음악중심 글로벌 투표",
      desc: `${formatDate(dates.tuesday)} ~ ${formatDate(
        dates.thursday
      )} (KST)`,
      status: calculateVoteStatus(
        formatDate(dates.tuesday),
        formatDate(dates.thursday)
      ),
    },
    {
      id: 4,
      image: "/banner/showchampion.jpg",
      link: "https://m.mbcplus.com/web/program/contentList.do?programInfoSeq=67",
      title: "쇼 챔피언 사전 투표",
      desc: `${formatDate(dates.friday)} ~ ${formatDate(dates.monday)} (KST)`,
      status: calculateVoteStatus(
        formatDate(dates.friday),
        formatDate(dates.monday)
      ),
    },
    {
      id: 5,
      image: "/banner/theshow.jpg",
      link: "https://programs.sbs.co.kr/fune/theshow/main",
      title: "더 쇼 사전 투표",
      desc: `${formatDate(dates.friday)} ~ ${formatDate(dates.monday)} (KST)`,
      status: calculateVoteStatus(
        formatDate(dates.friday),
        formatDate(dates.monday)
      ),
    },
    {
      id: 6,
      image: "/banner/inkigayo.jpg",
      link: "https://programs.sbs.co.kr/enter/gayo/main",
      title: "인기가요 사전 투표",
      desc: `${formatDate(dates.sunday)} ~ ${formatDate(
        dates.nextFriday
      )} (KST)`,
      status: calculateVoteStatus(
        formatDate(dates.sunday),
        formatDate(dates.nextFriday)
      ),
    },
  ];

  return banners;
};

const initialState = {
  banners: getBanners(),
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
});

export default bannerSlice.reducer;
