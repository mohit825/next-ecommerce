import SliderWrapper from "../styles/styled-component/Bannerstyle";

const Carousel = ({ banners }) => {
  const settings = {
    dots: true,
  };

  return (
    <SliderWrapper {...settings}>
      {banners.map((banner) => {
        return (
          <main key={banner.id}>
            <img
              className="custom-img"
              src={banner.bannerImageUrl}
              alt={banner.bannerImageAlt}
            />
          </main>
        );
      })}
    </SliderWrapper>
  );
};

export default Carousel;
