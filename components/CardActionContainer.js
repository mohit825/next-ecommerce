import PriceTag from "../ui/Card/PriceTag";
import { ProductPageButton } from "../styles/styled-component/ButtonStyle";
import { CardActionStyle } from "../styles/styled-component/ProductPageContainerStyle";

const CardActionContainer = ({ children, name }) => {
  return (
    <CardActionStyle>
      <PriceTag>{children}</PriceTag>
      <ProductPageButton aria-label={`Buy ${name} for ${children} ₹ `}>
        Buy Now
      </ProductPageButton>
    </CardActionStyle>
  );
};

export default CardActionContainer;
