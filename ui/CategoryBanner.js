import { Container, Img } from "../styles/styled-component/CategoryStyle";
import Button from "./Button";
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
            <div className="desc">{description}</div>
            <Button> Explore {categoryKey}</Button>
          </div>
        </Container>
      ) : null}
    </>
  );
};

export default CategoryBanner;
