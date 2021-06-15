import SliderWrapper from "../styles/Bannerstyle";

const Carousel = ({ banners }) => {
  const settings = {
    dots: true,
  };

  return (
    <SliderWrapper {...settings}>
      {banners.map((banner) => {
        return (
          <div key={banner.id}>
            <img
              className="custom-img"
              src={banner.bannerImageUrl}
              alt={banner.bannerImageAlt}
            />
          </div>
        );
      })}
    </SliderWrapper>
  );
};

export default Carousel;
