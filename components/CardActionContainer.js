import PriceTag from "../ui/Card/PriceTag";
import { ProductPageButton } from "../styles/styled-component/ButtonStyle";
import { CardActionStyle } from "../styles/styled-component/ProductPageContainerStyle";

const CardActionContainer = ({ children }) => {
  return (
    <CardActionStyle>
      <PriceTag>{children}</PriceTag>
      <ProductPageButton>Buy Now</ProductPageButton>
    </CardActionStyle>
  );
};

export default CardActionContainer;
