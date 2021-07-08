import PriceTag from "../ui/Card/PriceTag";
import { ProductPageButton } from "../styles/styled-component/ButtonStyle";
import { CardActionStyle } from "../styles/styled-component/ProductPageContainerStyle";
import { useCart } from "../context/CartContext";
import { addToCartHelper } from "../utils/helperFunctions";

const CardActionContainer = ({ price, product, name }) => {
  const { addToCart } = useCart();

  const addingItem = async () => {
    const success = await addToCartHelper(product.id);
    if (success) {
      addToCart(product);
    }
  };
  return (
    <CardActionStyle>
      <PriceTag>{price}</PriceTag>
      <ProductPageButton
        aria-label={`Buy ${name} for ${price} ₹ `}
        onClick={addingItem}
      >
        Buy Now
      </ProductPageButton>
    </CardActionStyle>
  );
};
export default CardActionContainer;
