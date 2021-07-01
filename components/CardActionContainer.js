import PriceTag from "../ui/Card/PriceTag";
import { ProductPageButton } from "../styles/styled-component/ButtonStyle";
import { CardActionStyle } from "../styles/styled-component/ProductPageContainerStyle";
import { useCart } from "../context/CartContext";

const CardActionContainer = ({ price, product }) => {
  const { addToCart } = useCart();

  return (
    <CardActionStyle>
      <PriceTag>{price}</PriceTag>
      <ProductPageButton onClick={() => addToCart(product)}>
        Buy Now
      </ProductPageButton>
    </CardActionStyle>
  );
};
export default CardActionContainer;
