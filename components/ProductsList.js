import Card from "./Card";
import { ArticleContainer } from "../styles/styled-component/ProductPageContainerStyle";
const ProductsList = ({ products }) => {
  return products.map((product) => {
    return (
      <ArticleContainer key={product.id}>
        <Card product={product} />
      </ArticleContainer>
    );
  });
};

export default ProductsList;
