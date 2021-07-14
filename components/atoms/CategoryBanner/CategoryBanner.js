import { Container, Img } from "./CategoryStyle";
import { useRouter } from "next/router";
import { FlatButton } from "../Button/ButtonStyle";
const CategoryBanner = ({
  image,
  description,
  isEnabled,
  name,
  categoryKey,
  order,
}) => {
  const router = useRouter();
  const navigateToProduct = () => router.push("/products");
  return (
    <>
      {isEnabled ? (
        <Container order={order}>
          <Img src={image} alt={description} />
          <div className="info-container">
            <h2>{name}</h2>
            <div className="desc">{description}</div>
            <FlatButton onClick={navigateToProduct}>
              Explore {categoryKey}
            </FlatButton>
          </div>
        </Container>
      ) : null}
    </>
  );
};

export default CategoryBanner;
