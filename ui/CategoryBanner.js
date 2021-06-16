import { Container, Img } from "../styles/CategoryStyle";
const CategoryBanner = ({
  image,
  description,
  isEnabled,
  name,
  categoryKey,
  order,
}) => {
  return (
    <>
      {isEnabled ? (
        <Container order={order}>
          <Img src={image} alt={description} />
          <div className="info-container">
            <h2>{name}</h2>
            <div>{description}</div>
            <span className="explore-btn">Explore {categoryKey}</span>
          </div>
        </Container>
      ) : null}
    </>
  );
};

export default CategoryBanner;
