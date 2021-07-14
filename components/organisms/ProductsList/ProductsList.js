import Card from "../../molecules/Card/Card";
import { ArticleContainer } from "../../molecules/Card/ProductPageContainerStyle";
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
