import PriceTag from "../ui/Card/PriceTag";
import { ProductPageButton } from "../styles/styled-component/ButtonStyle";
import { CardActionStyle } from "../styles/styled-component/ProductPageContainerStyle";
import { useCart } from "../context/CartContext";

const CardActionContainer = ({ price, product, name }) => {
  const { addToCart } = useCart();

  return (
    <CardActionStyle>
      <PriceTag>{price}</PriceTag>
      <ProductPageButton
        aria-label={`Buy ${name} for ${price} ₹ `}
        onClick={() => addToCart(product)}
      >
        Buy Now
      </ProductPageButton>
    </CardActionStyle>
  );
};
export default CardActionContainer;
