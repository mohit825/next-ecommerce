import PriceTag from "../../atoms/PriceTag/PriceTag";
import { FlatButton, ProductPageButton } from "../../atoms/Button/ButtonStyle";
import { CardActionStyle } from "../Card/ProductPageContainerStyle";
import { useCart } from "../../../context/CartContext";
import { addToCartHelper } from "../../../utils/helperFunctions";

const CardActionContainer = ({ price, product, name }) => {
  const { addToCart } = useCart();

  const addingItem = async () => {
    const success = await addToCartHelper(product.id);
    if (success) {
      addToCart(product);
    }
  };
  return (
    <>
      <div className="tb-cardAction">
        <FlatButton type="fullBtn" className="tb-btn" onClick={addingItem}>
          Buy Now @ Rs.{price}
        </FlatButton>
      </div>
      <CardActionStyle>
        <PriceTag>{price}</PriceTag>
        <ProductPageButton
          aria-label={`Buy ${name} for ${price} ₹ `}
          onClick={addingItem}
        >
          Buy Now
        </ProductPageButton>
      </CardActionStyle>
    </>
  );
};
export default CardActionContainer;
