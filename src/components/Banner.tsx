import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import "../styles/banner.scss";

const Banner = () => {
  const banners = useSelector((state: RootState) => state.banner.banners);
  return (
    <div className="banner-slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={8}
        slidesPerView={1}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="banner-item"
              onClick={() => window.open(banner.link, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <img src={banner.image} alt={banner.title} />
              <div className="banner-info">
                <span className={`status ${banner.status}`}>
                  {banner.status}
                </span>
                <h3>{banner.title}</h3>
                <p>{banner.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
